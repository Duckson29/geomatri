import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeCalkulatorComponent } from './shape-calkulator.component';

describe('ShapeCalkulatorComponent', () => {
  let component: ShapeCalkulatorComponent;
  let fixture: ComponentFixture<ShapeCalkulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeCalkulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeCalkulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
