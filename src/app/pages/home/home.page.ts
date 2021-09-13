import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  menuHeight;
  wherePage='home';
  option = {
    loop: true,
    direction: 'vertical'
  };
  constructor() {}
  ngOnInit() {
    this.menuHeight=window.innerHeight;

  }
}
