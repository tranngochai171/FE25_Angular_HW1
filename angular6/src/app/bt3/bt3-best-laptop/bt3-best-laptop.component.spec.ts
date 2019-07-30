import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3BestLaptopComponent } from './bt3-best-laptop.component';

describe('Bt3BestLaptopComponent', () => {
  let component: Bt3BestLaptopComponent;
  let fixture: ComponentFixture<Bt3BestLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3BestLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3BestLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
