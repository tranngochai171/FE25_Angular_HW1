import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BT1HeaderComponent } from './bt1-header.component';

describe('BT1HeaderComponent', () => {
  let component: BT1HeaderComponent;
  let fixture: ComponentFixture<BT1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BT1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BT1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
