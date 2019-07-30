import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BT1SidebarComponent } from './bt1-sidebar.component';

describe('BT1SidebarComponent', () => {
  let component: BT1SidebarComponent;
  let fixture: ComponentFixture<BT1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BT1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BT1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
