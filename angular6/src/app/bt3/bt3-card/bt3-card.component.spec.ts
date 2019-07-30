import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3CardComponent } from './bt3-card.component';

describe('Bt3CardComponent', () => {
  let component: Bt3CardComponent;
  let fixture: ComponentFixture<Bt3CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
