/// <reference path="../../node_modules/@types/canvas-gauges/index.d.ts" />

import {Component, ViewChild, Input, NgZone, ElementRef, OnInit} from '@angular/core';
import * as CanvasGauges from 'canvas-gauges';

@Component({
    selector: 'linear-gauge',
    styles: ['linear-gauge.css'],
    templateUrl: './linear-gauge.html'
})
export class LinearGaugeComponent implements OnInit {
    @ViewChild('lineargauge') canvas: ElementRef; 
    @Input() props: CanvasGauges.LinearGaugeOptions;
    gauge: CanvasGauges.LinearGauge;

    constructor(private el: ElementRef, private zone: NgZone) {
    }

    getProps(){
        this.props = Object.assign(this.props || {}, {
            renderTo: this.canvas.nativeElement
        });

        for(let attr of this.el.nativeElement.attributes){
            this.props[
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

        return this.props;
    }

    ngOnInit(){
        this.gauge = new CanvasGauges.LinearGauge(this.getProps()).draw();
    }

    ngAfterViewChecked(){
        let props = this.getProps();
        if (typeof props.value !== 'undefined') { 
            this.zone.runOutsideAngular(() => {
                this.gauge.value = props.value;
            });

            delete props.value;
        }

        this.gauge.update(props);
    }
}