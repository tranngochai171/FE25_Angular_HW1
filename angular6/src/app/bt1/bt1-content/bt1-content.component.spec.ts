import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BT1ContentComponent } from './bt1-content.component';

describe('BT1ContentComponent', () => {
  let component: BT1ContentComponent;
  let fixture: ComponentFixture<BT1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BT1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BT1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
