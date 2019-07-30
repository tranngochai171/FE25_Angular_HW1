import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3PromotionComponent } from './bt3-promotion.component';

describe('Bt3PromotionComponent', () => {
  let component: Bt3PromotionComponent;
  let fixture: ComponentFixture<Bt3PromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3PromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
