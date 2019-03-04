import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugesModule } from 'ng-beautiful-gauges';


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
