import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bt2Component } from './bt2.component';
import { Bt2HeaderComponent } from './bt2-header/bt2-header.component';
import { Bt2CarouselComponent } from './bt2-carousel/bt2-carousel.component';
import { Bt2WhatWeDoComponent } from './bt2-what-we-do/bt2-what-we-do.component';
import { Bt2ContactComponent } from './bt2-contact/bt2-contact.component';
import { Bt2ListCardComponent } from './bt2-list-card/bt2-list-card.component';
import { Bt2CardComponent } from './bt2-card/bt2-card.component';
import { Bt2FooterComponent } from './bt2-footer/bt2-footer.component';
import { Bt2Card1Component } from './bt2-list-card/bt2-card1/bt2-card1.component';



@NgModule({
  declarations: [Bt2Component, Bt2HeaderComponent, Bt2CarouselComponent, Bt2WhatWeDoComponent, Bt2ContactComponent, Bt2ListCardComponent, Bt2CardComponent, Bt2FooterComponent, Bt2Card1Component],
  exports: [Bt2Component, Bt2HeaderComponent, Bt2CarouselComponent, Bt2WhatWeDoComponent, Bt2ContactComponent, Bt2ListCardComponent, Bt2CardComponent, Bt2FooterComponent],
  imports: [
    CommonModule
  ]
})
export class Bt2Module { }
