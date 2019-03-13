import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { VechicleSimService } from '../vechiclesim.service';

/**
 * Speedometer gauge based on a radial gauge.
 * Uses the VehicleSimService to provide speed data
 * via the speed$ observable. The gauge's value is bound to
 * the speed$ property.
 */
@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html'
})
export class SpeedometerComponent implements OnInit, AfterViewInit {

  public value$: Observable<number>;

  constructor(private simService: VechicleSimService) {
  }

  ngOnInit() {
    this.value$ = this.simService.speed$;
  }

  ngAfterViewInit() {
  }

}
