import {Component, NgZone, ElementRef} from '@angular/core';
import {BaseGauge} from './base-gauge';
import * as CanvasGauges from 'canvas-gauges';

/**
 * Implements Radial Gauge from the original library
 */
@Component({
    selector: 'radial-gauge',
    template: '<canvas #gauge></canvas>'
})
export class RadialGaugeComponent extends BaseGauge<CanvasGauges.RadialGauge,CanvasGauges.RadialGaugeOptions> {
    constructor(el: ElementRef, zone: NgZone) {
        super(el, zone);
    }

    ngOnInit() {
        this.gauge = new CanvasGauges.RadialGauge(this.getOptions()).draw();
    }
}