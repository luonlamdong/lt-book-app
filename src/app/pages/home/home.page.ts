import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  option = {
    loop: true,
    direction: 'vertical'
  };
  rotate360: any = false;
  constructor() {}

  ngOnInit(){

  }

  rotateActive(){
    if(this.rotate360 == false){
      this.rotate360 = true;
    }
    else{
      this.rotate360 = false;
    }
  }

}
