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
