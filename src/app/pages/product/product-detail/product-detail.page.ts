import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  menuHeight;
  wherePage='product';
  slideOpts = {
    slidesPerView: 'auto',
    loop: true
  };
  listProductRelate: any = [
    {
      name: 'AmelieVil',
      imageURL: 'assets/images/book3.jpg'
    },
    {
      name: 'AmelieVil',
      imageURL: 'assets/images/book3.jpg'
    },
    {
      name: 'AmelieVil',
      imageURL: 'assets/images/book3.jpg'
    },
    {
      name: 'AmelieVil',
      imageURL: 'assets/images/book3.jpg'
    },
    {
      name: 'AmelieVil',
      imageURL: 'assets/images/book3.jpg'
    },
    {
      name: 'AmelieVil',
      imageURL: 'assets/images/book3.jpg'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.menuHeight=window.innerHeight;
  }

}
