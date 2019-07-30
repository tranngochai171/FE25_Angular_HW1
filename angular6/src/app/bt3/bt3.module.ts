import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bt3Component } from './bt3.component';
import { Bt3HeaderComponent } from './bt3-header/bt3-header.component';
import { Bt3CarouselComponent } from './bt3-carousel/bt3-carousel.component';
import { Bt3BestSmartphoneComponent } from './bt3-best-smartphone/bt3-best-smartphone.component';
import { Bt3BestLaptopComponent } from './bt3-best-laptop/bt3-best-laptop.component';
import { Bt3PromotionComponent } from './bt3-promotion/bt3-promotion.component';
import { Bt3CardComponent } from './bt3-card/bt3-card.component';



@NgModule({
  declarations: [Bt3Component, Bt3HeaderComponent, Bt3CarouselComponent, Bt3BestSmartphoneComponent, Bt3BestLaptopComponent, Bt3PromotionComponent, Bt3CardComponent],
  exports: [Bt3Component, Bt3HeaderComponent, Bt3CarouselComponent, Bt3BestSmartphoneComponent, Bt3BestLaptopComponent, Bt3PromotionComponent, Bt3CardComponent],
  imports: [
    CommonModule
  ]
})
export class Bt3Module { }
