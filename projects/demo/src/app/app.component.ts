import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RadialGauge } from 'ng-canvas-gauges';
import { LinearGauge, LinearGaugeOptions } from 'ng-canvas-gauges';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('rgauge3')
  rgauge3: RadialGauge;

   @ViewChild('lgauge1')
  lgauge1: LinearGauge;

  title = 'ng-canvas-gauges demo';

  rgauge1Options: any;

  constructor() {
    this.rgauge1Options = {
      title: 'rgauge1',
      width: 200,
      height: 200,
      colorPlate: 'rgb(255, 0, 255)',
    animationRule: 'bounce',
    animationDuration: 800
  };
}

  rgauge1Observable$: Observable<number>;

  rgauge2Value = 0;


  ngAfterViewInit(): void {

    // animate rgauge1
    this.rgauge1Observable$ = interval(1000).pipe(
      map(() => Math.floor(Math.random() * 100))
    );

    // change rgauge1 colorplate using parent's options binding
    interval(5000).subscribe( () => {
      this.rgauge1Options = {colorPlate: 'rgb(0, 255, 255)'};

    });


    // animate rgauge2
    interval(1000).pipe(
      map( () => Math.floor( Math.random() * 100 ))
    ).subscribe( x => {
      this.rgauge2Value = x;
    });


    // animate rgauge3
    interval(1000).pipe(
      map( () => Math.floor( Math.random() * 100 ))
    ).subscribe( x => {
      this.rgauge3.value = x;
    });

    // animate lgauge1
    interval(1000).pipe(
      map( () => Math.floor( Math.random() * 100 ))
    ).subscribe( x => {
      this.lgauge1.update( {value: x} as LinearGaugeOptions );
    });
  }


}
