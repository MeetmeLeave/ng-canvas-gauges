import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuelgaugeComponent } from './fuelgauge/fuelgauge.component';
import { GaugesModule } from 'ng-beautiful-gauges';
import { SpeedometerComponent } from './speedometer/speedometer.component';
import { TachometerComponent } from './tachometer/tachometer.component';
import { ScaleComponent } from './scale/scale.component';
import { ProgressComponent } from './progress/progress.component';
import { CompassComponent } from './compass/compass.component';
import { SentimentComponent } from './sentiment/sentiment.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelgaugeComponent,
    SpeedometerComponent,
    TachometerComponent,
    ScaleComponent,
    ProgressComponent,
    CompassComponent,
    SentimentComponent
  ],
  imports: [
    BrowserModule,
    GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
