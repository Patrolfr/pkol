import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsAndComplaintsComponent } from './returns-and-complaints.component';

describe('ReturnsAndComplaintsComponent', () => {
  let component: ReturnsAndComplaintsComponent;
  let fixture: ComponentFixture<ReturnsAndComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsAndComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsAndComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
