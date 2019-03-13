import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelgaugeComponent } from './fuelgauge.component';

describe('FuelgaugeComponent', () => {
  let component: FuelgaugeComponent;
  let fixture: ComponentFixture<FuelgaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelgaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelgaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
