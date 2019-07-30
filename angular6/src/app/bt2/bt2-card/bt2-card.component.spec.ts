import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2CardComponent } from './bt2-card.component';

describe('Bt2CardComponent', () => {
  let component: Bt2CardComponent;
  let fixture: ComponentFixture<Bt2CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
