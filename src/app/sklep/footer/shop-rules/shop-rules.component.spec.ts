import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRulesComponent } from './shop-rules.component';

describe('ShopRulesComponent', () => {
  let component: ShopRulesComponent;
  let fixture: ComponentFixture<ShopRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
