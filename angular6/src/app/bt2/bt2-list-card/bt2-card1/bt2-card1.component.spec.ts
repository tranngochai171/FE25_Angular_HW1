import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2Card1Component } from './bt2-card1.component';

describe('Bt2Card1Component', () => {
  let component: Bt2Card1Component;
  let fixture: ComponentFixture<Bt2Card1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2Card1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2Card1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
