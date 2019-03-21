import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { RadialGauge } from 'ng-canvas-gauges';

/**
 * A simple scale gauge for measuring 0-10 lbs.
 * Demonstrates dynamic configuration and update of
 * gauge properties.
 */
@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent implements OnInit, AfterViewInit {

  @ViewChild('scale_gauge')
  private radialGauge: RadialGauge;

  public scaleGaugeOptions: any;
  public value$: Observable<number>;

  private plateColor = {
    min: 50,
    max: 250,
    current: 150,
    increasing: true
  }

  constructor() {
    this.initOptions();
  }

  ngOnInit() {
    this.value$ = interval(2000).pipe(
      map(() => Math.random() * 10)
    );
  }

  ngAfterViewInit() {
    this.radialGauge.update(this.scaleGaugeOptions);

    // timer that updates plate.color property
    interval(100).subscribe( t => this.updateCoverPlateColor() );
  }

  // Update the cover.plate red property and update scaleGaugeOptions
  // Incrementally increases color.plate red color value up to max.
  // Then decrease color.plate red color down to min.
  private updateCoverPlateColor() {
    this.plateColor.current +=
        this.plateColor.increasing ? 2 : -2;

    const color = `"rgb(250,${this.plateColor.current},50)"`;


    this.scaleGaugeOptions = {colorPlate: color};

    if (this.plateColor.increasing && this.plateColor.current >= this.plateColor.max) {
      this.plateColor.increasing = false;
    } else if (!this.plateColor.increasing && this.plateColor.current <= this.plateColor.min) {
      this.plateColor.increasing = true;
    }

  }

  private initOptions() {
    this.scaleGaugeOptions = {
        title: 'Scale',
        width: '300',
        height: '300',
        units: 'Lbs',
        minValue: '0',
        maxValue: '10',
        majorTicks: '[0,1,2,3,4,5,6,7,8,9,0]',
        minorTicks: '2',
        strokeTicks: 'true',
        ticksAngle: '360',
        startAngle: '180',
        valueBox: 'true',
        animationRule: 'bounce',
        animationDuration: '500',
        colorPlate: 'rgba(200,50,50,1)',
        highlights: '[]'
  };
}

}

