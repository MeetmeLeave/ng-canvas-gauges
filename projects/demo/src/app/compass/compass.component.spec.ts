import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassComponent } from './compass.component';

describe('CompassComponent', () => {
  let component: CompassComponent;
  let fixture: ComponentFixture<CompassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
