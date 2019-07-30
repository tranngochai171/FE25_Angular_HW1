import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3HeaderComponent } from './bt3-header.component';

describe('Bt3HeaderComponent', () => {
  let component: Bt3HeaderComponent;
  let fixture: ComponentFixture<Bt3HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt3HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
