import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2ListCardComponent } from './bt2-list-card.component';

describe('Bt2ListCardComponent', () => {
  let component: Bt2ListCardComponent;
  let fixture: ComponentFixture<Bt2ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
