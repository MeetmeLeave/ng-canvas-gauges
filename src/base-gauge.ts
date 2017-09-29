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

import {Component, ViewChild, Input, NgZone, ElementRef, OnInit} from '@angular/core';
import * as CanvasGauges from 'canvas-gauges';

/**
 * Base gauge component for the Gauges rendering
 * T - Type of the Gauge you want to be rendered (Currently RadialGauge, LinearGauge from the original library)
 * T2 - Type of the options used within the particular gauge (RadialGaugeOptions, LinearGaugeOptions)
 */
export abstract class BaseGauge<T extends CanvasGauges.BaseGauge, T2 extends CanvasGauges.GenericOptions> implements OnInit {
    /**
     * Canvas element on the template used by the library to draw gauge element
     */
    @ViewChild('gauge') canvas: ElementRef; 
    /**
     * Gauge options for rendering
     */
    @Input() options: T2;
    /**
     * Stores gauge object which performs initial rendering and draws updates on the canvas. 
     * Shoulbe initialized in the child classes inside the ngOnInit implementation
     */
    gauge: T;
    
    /**
     * 
     * @param el - reference to the element of the whole component, used to scrape options declared on the component itself
     * @param zone - required to redraw gauge outside of Angular, due to animation lags caused by the ovewritten function of the ngZone
     */
    constructor(private el: ElementRef, public zone: NgZone) {
    }

    /**
     * Should contain instantiation of the Gauge object in the child component
     */
    abstract ngOnInit()

    /**
     * Returns options provided to the Gauge in a single object 
     */
    getOptions() {
        this.options = Object.assign(this.options || {} as T2, {
            renderTo: this.canvas.nativeElement
        });

        for (var i = 0; i < this.el.nativeElement.attributes.length; i++) {
            this.options[
                this.el.nativeElement.attributes[i].name
                    .split(/-/)
                    .map((part: string, i: number) => 
                        i > 0 ? 
                            part.charAt(0).toUpperCase() + part.substr(1) :
                            part
                    )
                    .join('')
            ] = CanvasGauges.DomObserver.parse(this.el.nativeElement.attributes[i].value);
        }

        return this.options;
    }

    /**
     * Performs animation redraw if the options were changed by the parent component
     */
    ngAfterViewChecked() {
        let props = this.getOptions();
        if (typeof props.value !== 'undefined') { 
            this.zone.runOutsideAngular(() => {
                this.gauge.value = props.value;
            });

            delete props.value;
        }

        this.gauge.update(props);
    }
}