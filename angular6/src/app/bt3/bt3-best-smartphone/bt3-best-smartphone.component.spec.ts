import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3BestSmartphoneComponent } from './bt3-best-smartphone.component';

describe('Bt3BestSmartphoneComponent', () => {
  let component: Bt3BestSmartphoneComponent;
  let fixture: ComponentFixture<Bt3BestSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3BestSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3BestSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
