import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt3-best-smartphone',
  templateUrl: './bt3-best-smartphone.component.html',
  styleUrls: ['./bt3-best-smartphone.component.scss']
})
export class Bt3BestSmartphoneComponent implements OnInit {
  imgs = [{
    name: 'iPhone X',
    decription: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
    url: '../../assets/img/sp_iphoneX.png'
  }, {
    name: 'Galaxy Note7',
    decription: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
    url: '../../assets/img/sp_note7.png'
  }, {
    name: 'Vivo',
    decription: 'A young global smartphone brand focusing on introducing perfect sound quality',
    url: '../../assets/img/sp_vivo850.png'
  }, {
    name: 'Blackberry',
    decription: 'BlackBerry is a line of smartphones, tablets, and services originally designed',
    url: '../../assets/img/sp_blackberry.png'
  }];
  constructor() { }

  ngOnInit() {
  }

}
