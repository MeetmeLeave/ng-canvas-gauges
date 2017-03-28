import {Component, NgZone, ElementRef} from '@angular/core';
import {BaseGauge} from './base-gauge';

@Component({
    selector: 'linear-gauge',
    templateUrl: './linear-gauge.html'
})
export class LinearGaugeComponent extends BaseGauge<CanvasGauges.LinearGauge, CanvasGauges.LinearGaugeOptions> {
    constructor(el: ElementRef, zone: NgZone) {
        super(el, zone);
    }

    ngOnInit() {
        this.gauge = new CanvasGauges.LinearGauge(this.getOptions()).draw();
    }
}