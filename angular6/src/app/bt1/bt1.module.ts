import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BT1Component } from './bt1.component';
import { BT1HeaderComponent } from './bt1-header/bt1-header.component';
import { BT1ContentComponent } from './bt1-content/bt1-content.component';
import { BT1SidebarComponent } from './bt1-sidebar/bt1-sidebar.component';
import { BT1FooterComponent } from './bt1-footer/bt1-footer.component';



@NgModule({
  declarations: [BT1Component,BT1HeaderComponent, BT1ContentComponent, BT1SidebarComponent, BT1FooterComponent],
  exports : [BT1Component,BT1HeaderComponent, BT1ContentComponent, BT1SidebarComponent, BT1FooterComponent],
  imports: [
    CommonModule
  ]
})
export class BT1Module { }
