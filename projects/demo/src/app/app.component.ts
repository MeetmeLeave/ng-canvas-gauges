import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
      ng-canvas-gauges
      </h1>
    <radial-gauge width="300" height="300"></radial-gauge>
  `,
  styles: []
})
export class AppComponent {
  title = 'demo';
}
