/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Vlad Martynenko <vladimir.martynenko.work@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component, ViewChild, Input, NgZone, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as CanvasGauges from 'canvas-gauges';
import * as Rx from 'rx-dom-html';

/**
 * Base gauge component for the Gauges rendering
 * T - Type of the Gauge to be rendered (Currently RadialGauge, LinearGauge from the original library)
 * T2 - Type of config options used by the particular gauge (RadialGaugeOptions, LinearGaugeOptions)
 */
export abstract class BaseGauge<T extends CanvasGauges.BaseGauge, T2 extends CanvasGauges.GenericOptions>
    implements OnInit, AfterViewInit {

    /**
     * Canvas element on the template used by the library to draw gauge element
     */
    @ViewChild('gauge')
    protected canvas: ElementRef;

    /**
     * A gauge instance responsible for rendering and updates on the canvas.
     * Subclasses should initialize in their ngOnInit implementation.
     */
    protected gauge: T;

    /**
     * value property of gauge prior to component view initialization
     */
    private preInitValue: number;

    /**
     *
     * @param el - reference to the element of the whole component, used to scrape options declared on the component itself
     * @param zone - required to redraw gauge outside of Angular, due to animation lags caused by the ovewritten function of the ngZone
     */
    constructor(private el: ElementRef, public zone: NgZone) {
    }

    /**
     * Subclasses should instantiate of the Gauge object in the child component
     */
    abstract ngOnInit(): void;

    public set value(newValue: number) {
        if (!this.gauge) {
            this.preInitValue = newValue;
            return;
        }

        this.zone.runOutsideAngular(() => {
            this.gauge.value = newValue;
        });
    }

    /**
     * Returns gauges properties as an options object.
     */
    public get options(): T2 {
        const options = {} as T2;
        options.renderTo = this.canvas.nativeElement;

        for (const attr of this.el.nativeElement.attributes) {
            const prop = attributeName2PropertyName(attr.name);
            options[prop] = CanvasGauges.DomObserver.parse(attr.value);
        }
        return options;
    }

    public update(newOptions: T2 | {}) {

        // map all options onto this element's attributes
        // Then attribute changes will be detected and pushed to the gauge.update()
        if (!newOptions) { return; }

        // tslint:disable-next-line:forin
        for (const prop in newOptions) {
            const val = newOptions[prop].toString();

            if (prop === 'value') {
                this.value = CanvasGauges.DomObserver.parse(val);
            } else {
                const attrName = toKebabCase(prop);
                this.el.nativeElement.setAttribute(attrName, val);
            }
        }
    }

    public ngAfterViewInit() {

        // initial update of gauge properties
        this.initGauge();

        // Listen to gauge element for attribute changes
        // Convert all changed attribtues into a GenericOptions or subclass
        // Update the gauge with the new options.
        Rx.DOM.fromMutationObserver(this.el.nativeElement, { attributes: true }).
            subscribe(changes => {
                const newOptions = {} as T2;
                changes.forEach(change => {
                    if ('attributes' === change.type) {
                        // console.log('DOM, change', change.attributeName);
                        newOptions[attributeName2PropertyName(change.attributeName)] =
                            this.el.nativeElement.getAttribute(change.attributeName);
                    }
                });

                this.basicUpdate(newOptions);
            });
    }

    protected initGauge() {
        const options = this.options;
        if (this.preInitValue) {
            options.value = this.preInitValue;
        }
        this.basicUpdate(options);
    }


    public basicUpdate(options: T2) {

        // console.log('basic Update', options);

        if (typeof options.value === 'number') {

            // use gauge api directly for most efficient update method
            this.value = options.value;

            // filter value property from options to avoid redundant
            // processing by gauge
            delete options.value;
        }

        // filter empty options and do nothing if no gauge properties to update
        if (Object.keys(options).length) {
            this.gauge.update(options);
        }
    }

}

// String utils
const attributeName2PropertyName = (attrName: string) => toCamelCase(attrName);

const propertyName2AttrName = (propName: string) => toKebabCase(propName);

const toCamelCase = (str) => str.replace(/(\-\w)/g, (m) => m[1].toUpperCase());

const toKebabCase = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();


