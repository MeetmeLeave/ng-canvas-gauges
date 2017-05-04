import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
options: Object;
  value: number;

  constructor(){
    this.options = {
      minValue: -100,
      maxValue: 100,
      animationRule: 'linear',
      animationDuration: 500,
      width: 300,
      height: 300,
      highlights: false,
      majorTicks: [-100,-50, 0, 50, 100],
      minorTicks: 10,
      exactTicks: true,
      animatedValue: true
    }
    this.options['data-type']="linear-gauge";
  }

  ngOnInit(){
    window.setInterval(()=> {
      this.value = -100 + Math.random() * 200;
      Object.assign(this.options, {
        colorPlate: '#eee'
      });
    }, 1000);
  }
}
