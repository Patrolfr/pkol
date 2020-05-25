import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToSupportComponent } from './message-to-support.component';

describe('MessageToSupportComponent', () => {
  let component: MessageToSupportComponent;
  let fixture: ComponentFixture<MessageToSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageToSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
