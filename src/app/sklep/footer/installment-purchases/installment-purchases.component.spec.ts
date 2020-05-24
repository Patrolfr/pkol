import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentPurchasesComponent } from './installment-purchases.component';

describe('InstallmentPurchasesComponent', () => {
  let component: InstallmentPurchasesComponent;
  let fixture: ComponentFixture<InstallmentPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
