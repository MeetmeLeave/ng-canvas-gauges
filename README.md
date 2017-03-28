### Angular2 component wrapper for the canvas-gauges library written by @Mikhus(https://github.com/Mikhus/canvas-gauges).

### The setup path:
1. Install the package in your angular2 app
~~~
npm install --save ng-canvas-gauges
~~~
2. Add the component to your module file and register it inside the declarations:

~~~javascript 
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
~~~
3. Add the markup to your template as simple as that:
~~~
<linear-gauge width="150" height="600"></linear-gauge>
~~~

## Special Thanks

[![Lohika](http://www.lohika.com/wp-content/themes/gridalicious/images/lohika_full.svg)](http://www.lohika.com/)

For supporting development!