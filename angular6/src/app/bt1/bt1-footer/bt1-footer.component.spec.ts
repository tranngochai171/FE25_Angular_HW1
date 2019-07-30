import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BT1FooterComponent } from './bt1-footer.component';

describe('BT1FooterComponent', () => {
  let component: BT1FooterComponent;
  let fixture: ComponentFixture<BT1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BT1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BT1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
