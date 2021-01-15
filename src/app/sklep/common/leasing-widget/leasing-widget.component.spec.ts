import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingWidgetComponent } from './leasing-widget.component';

describe('LeasingWidgetComponent', () => {
  let component: LeasingWidgetComponent;
  let fixture: ComponentFixture<LeasingWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
