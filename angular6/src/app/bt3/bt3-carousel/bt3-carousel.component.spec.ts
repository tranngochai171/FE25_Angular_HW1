import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3CarouselComponent } from './bt3-carousel.component';

describe('Bt3CarouselComponent', () => {
  let component: Bt3CarouselComponent;
  let fixture: ComponentFixture<Bt3CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
