import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugesModule } from 'projects/ng-canvas-gauges/src/public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
