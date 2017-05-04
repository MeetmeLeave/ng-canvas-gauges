import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LinearGaugeComponent, RadialGaugeComponent} from '../../node_modules/ng-canvas-gauges/component';

@NgModule({
  declarations: [
    AppComponent,
    LinearGaugeComponent,
    RadialGaugeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
