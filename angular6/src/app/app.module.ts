import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BT1Module } from './bt1/bt1.module';
import { Bt2Module } from './bt2/bt2.module';
import { Bt3Module } from './bt3/bt3.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule , BT1Module , Bt2Module , Bt3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
