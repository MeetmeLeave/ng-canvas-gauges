import { NgModule } from '@angular/core';
import { LinearGauge } from './linear-gauge';
import { RadialGauge } from './radial-gauge';

@NgModule({
  declarations: [
    LinearGauge,
    RadialGauge],
  imports: [
  ],
  exports: [
    LinearGauge,
    RadialGauge]
})
export class GaugesModule { }
