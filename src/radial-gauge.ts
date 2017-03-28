import {Component, NgZone, ElementRef} from '@angular/core';
import {BaseGauge} from './base-gauge';

@Component({
    selector: 'radial-gauge',
    templateUrl: './gauge.html'
})
export class RadialGaugeComponent extends BaseGauge<CanvasGauges.RadialGauge,CanvasGauges.RadialGaugeOptions> {
    constructor(el: ElementRef, zone: NgZone) {
        super(el, zone);
    }

    ngOnInit() {
        this.gauge = new CanvasGauges.RadialGauge(this.getOptions()).draw();
    }
}