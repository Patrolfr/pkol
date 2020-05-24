import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryStoresComponent } from './stationary-stores.component';

describe('StationaryStoresComponent', () => {
  let component: StationaryStoresComponent;
  let fixture: ComponentFixture<StationaryStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationaryStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationaryStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
