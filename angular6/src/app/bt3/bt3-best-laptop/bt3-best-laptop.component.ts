import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt3-best-laptop',
  templateUrl: './bt3-best-laptop.component.html',
  styleUrls: ['./bt3-best-laptop.component.scss']
})
export class Bt3BestLaptopComponent implements OnInit {
  message: String = 'abcs';
  printable: boolean = true;
  show_disappear = () => this.printable = !this.printable;
  imgs = [{
    name: 'MACBOOK',
    decription: 'The MacBook is a brand of notebook computers manufactured by Apple Inc',
    url: '../../assets/img/lt_macbook.png'
  }, {
    name: 'ASUS ROG',
    decription: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices',
    url: '../../assets/img/lt_rog.png'
  }, {
    name: 'HP OMEN',
    decription: 'A young global smartphone brand focusing on introducing perfect sound quality',
    url: '../../assets/img/lt_hp.png'
  }, {
    name: 'LENOVO THINKPAD',
    decription: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012',
    url: '../../assets/img/lt_lenovo.png'
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
