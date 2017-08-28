### Angular2 component wrapper for the canvas-gauges library written by @Mikhus(https://github.com/Mikhus/canvas-gauges).

### The setup path:
1. Install the package in your angular2 app
~~~
npm install --save ng-canvas-gauges
~~~
2. Add the GaugesModule to your AppModule file and register it inside the imports:

~~~javascript 
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GaugesModule} from 'ng-canvas-gauges/lib';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        GaugesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

~~~
3. Add the markup to your template as simple as that:
~~~javascript
<linear-gauge width="150" height="600"></linear-gauge>
~~~
------------------------------------------------------

## More specific example of data binding
~~~javascript
<linear-gauge
    width="150"
    height="400"
    units="°C"
    title="Temperature"
    min-value="-50"
    max-value="50"
    major-ticks="[-50,-40,-30,-20,-10,0,10,20,30,40,50]"
    minor-ticks="5"
    stroke-ticks="true"
    ticks-width="15"
    ticks-width-minor="7.5"
    highlights='[ {"from": -50, "to": 0, "color": "rgba(0,0, 255, .3)"},
    {"from": 0, "to": 50, "color": "rgba(255, 0, 0, .3)"} ]'
    color-major-ticks="#ffe66a"
    color-minor-ticks="#ffe66a"
    color-title="#eee"
    color-units="#ccc"
    color-numbers="#eee"
    color-plate="#2465c0"
    color-plate-end="#327ac0"
    border-shadow-width="0"
    borders="false"
    border-radius="10"
    needle-type="arrow"
    needle-width="3"
    animation-duration="250"
    animation-rule="linear"
    animated-value="true"
    color-needle="#222"
    color-needle-end=""
    color-bar-progress="#327ac0"
    color-bar="#f5f5f5"
    bar-stroke="0"
    bar-width="8"
    bar-begin-circle="false"
    [attr.value]="value"
  ></linear-gauge>
~~~
All possible attributes from the original library are supported and can be found right here:
[https://canvas-gauges.com/documentation/user-guide/configuration](https://canvas-gauges.com/documentation/user-guide/configuration)

## Special Thanks

[![Lohika](http://www.lohika.com/wp-content/themes/gridalicious/images/lohika_full.svg)](http://www.lohika.com/)

For supporting development!
