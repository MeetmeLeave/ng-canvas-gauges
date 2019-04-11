import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VechicleSimService } from '../vechiclesim.service';

/**
 * A simple compass gauge for indicating direction (magnetic north).
 * Demonstrates animated gauge plate.
 */
@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html'
})
export class CompassComponent implements OnInit {

  public value$: Observable<number>;

  constructor(private simService: VechicleSimService) {
  }

  ngOnInit() {
    this.value$ = this.simService.speed$;
  }


}
