import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GaugesModule } from 'ng-canvas-gauges';
import { AppComponent } from './app.component';
import { CompassComponent } from './compass/compass.component';
import { FuelgaugeComponent } from './fuelgauge/fuelgauge.component';
import { ProgressComponent } from './progress/progress.component';
import { ScaleComponent } from './scale/scale.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { SpeedometerComponent } from './speedometer/speedometer.component';
import { TachometerComponent } from './tachometer/tachometer.component';



@NgModule({
  declarations: [
    AppComponent,
    CompassComponent,
    FuelgaugeComponent,
    ProgressComponent,
    ScaleComponent,
    SentimentComponent,
    SpeedometerComponent,
    TachometerComponent,
  ],
  imports: [
    BrowserModule,
    GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
