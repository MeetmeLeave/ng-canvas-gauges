import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { VechicleSimService } from '../vechiclesim.service';

/**
 * A fuel gauge with range F-E.
 * The gauge's element attribute "value" is bound to the component
 * value$ property.
 */
@Component({
  selector: 'app-fuelgauge',
  templateUrl: './fuelgauge.component.html'
})
export class FuelgaugeComponent implements OnInit {

  public value$: Observable<number>;

  constructor(private simService: VechicleSimService) { }

  ngOnInit() {
    this.value$ = this.simService.fuel$;
  }

}
