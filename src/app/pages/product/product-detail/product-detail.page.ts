import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigateByUrl('/product');
  }
}
