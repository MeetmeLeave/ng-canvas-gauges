/// <reference path="../node_modules/@types/canvas-gauges/index.d.ts" />

import {Component, ViewChild, Input, NgZone, ElementRef, OnInit} from '@angular/core';
import * as CanvasGauges from 'canvas-gauges';

export abstract class BaseGauge<T extends CanvasGauges.BaseGauge, T2 extends CanvasGauges.GenericOptions> implements OnInit {
    @ViewChild('gauge') canvas: ElementRef; 
    @Input() options: T2;
    gauge: T;
    
    constructor(private el: ElementRef, public zone: NgZone) {
    }

    abstract ngOnInit()

    getOptions() {
        this.options = Object.assign(this.options || {} as T2, {
            renderTo: this.canvas.nativeElement
        });

        for(let attr of this.el.nativeElement.attributes){
            this.options[
                attr.name
                    .split(/-/)
                    .map((part: string, i: number) => 
                        i > 0 ? 
                            part.charAt(0).toUpperCase() + part.substr(1) :
                            part
                    )
                    .join('')
            ] = attr.value;
        }

        return this.options;
    }

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