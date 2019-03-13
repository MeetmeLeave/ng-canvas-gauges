import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachometerComponent } from './tachometer.component';

describe('TachometerComponent', () => {
  let component: TachometerComponent;
  let fixture: ComponentFixture<TachometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
