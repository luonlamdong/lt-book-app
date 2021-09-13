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
    direction: 'vertical'
  };
  rotate360: any = false;
  constructor() {}
  ngOnInit() {
    this.menuHeight=window.innerHeight;
  }
  rotateActive(){
    if(this.rotate360 === false){
      this.rotate360 = true;
    }
    else{
      this.rotate360 = false;
    }
  }

  }
}
