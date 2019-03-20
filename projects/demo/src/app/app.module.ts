import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugesModule } from 'ng-canvas-gauges';


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
