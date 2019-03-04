### Angular 6+ component wrapper for [@Mikhus'](https://github.com/Mikhus/canvas-gauges) canvas-gauges library.

*Note: The ng-beautiful-gauges is an updated version of the [ng-canvas-gauges](https://github.com/MeetmeLeave/ng-canvas-gauges) 
project to work with Angular 6 and greater versions. This package will remain active 
until the project is updated to work with Angular 6+ projects. A [pull request](https://github.com/MeetmeLeave/ng-canvas-gauges/pull/19) 
based on this project was submitted to ng-canvas-gauges on 20190228).*


### Getting Started
1. Install the package in your angular 6 or greater app
~~~
npm install ng-beautiful-gauges
~~~
2. Import the GaugesModule to your AppModule file and register it in the imports:

~~~javascript 
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {GaugesModule} from 'ng-beautiful-gauges';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        GaugesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
~~~
3. Add the linear-gauge or radial-gauge element to your template:
~~~javascript
<linear-gauge width="150" height="400"></linear-gauge>
<radial-gauge width="400" height="400"></radial-gauge>
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
    [attr.value]="myValueProperty"
  ></linear-gauge>

  <radial-gauge 
    [options]="myOptionsProperty"
    [value]="myValueProperty"
  ><radial-gauge>
~~~
All canvas-gauge attributes are supported as shown above (kebab format) or 
programmatically (camelCase format). Learn more: [https://canvas-gauges.com/documentation/user-guide/configuration](https://canvas-gauges.com/documentation/user-guide/configuration)

------------------------------------------------------
## Build
The repo layout is based on the Angular 6 or greater workspace consisting of the ng-beautiful-gauge library project
and a demo angular app project. 

1. Install dependencies
~~~
npm install
~~~

2. Create an installable library (.tgz) for upload to the npm public repository or for local installation. 
    Output is to ./dist/ng-beautiful-gauges/ folder.
~~~
npm run build:package
~~~

------------------------------------------------------

## Special Thanks

[![Lohika](http://www.lohika.com/wp-content/themes/gridalicious/images/lohika_full.svg)](http://www.lohika.com/)

For supporting development!

The upgrade of this project to ng-beautiful-gauges was developed using 
[CodeMix](https://www.genuitec.com/products/codemix/).

