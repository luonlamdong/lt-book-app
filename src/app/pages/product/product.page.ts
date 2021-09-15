import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  menuHeight;
  wherePage='product';
  labelTypeBook: any = '';
  listProduct: any = [];
  listProduct1: any = [
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4
    },
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4
    },
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4
    },
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4
    },
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4
    },
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4
    }
  ];
  listProduct2: any = [
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'conan',
      price: '100.000',
      rating: 5
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'conan',
      price: '100.000',
      rating: 5
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'conan',
      price: '100.000',
      rating: 5
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'conan',
      price: '100.000',
      rating: 5
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'conan',
      price: '100.000',
      rating: 5
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'conan',
      price: '100.000',
      rating: 5
    }
  ];

  listTypeBook: any = [
    {
      name: 'TextBook',
      icon: 'assets/icon/icon-event.svg',
    },
    {
      name: 'Novel',
      icon: 'assets/icon/icon-event.svg',
    },
    {
      name: 'Comic',
      icon: 'assets/icon/icon-event.svg',
    },
    {
      name: 'Poem',
      icon: 'assets/icon/icon-event.svg',
    },
    {
      name: 'Thriller',
      icon: 'assets/icon/icon-event.svg',
    },
    {
      name: 'Short',
      icon: 'assets/icon/icon-event.svg',
    },
  ];
  isClick: any = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuHeight=window.innerHeight;
    this.labelTypeBook = 'TextBook';
    this.listProduct = this.listProduct1;
  }

  goDetail(){
    this.router.navigateByUrl('/product/detail');
  }

  hanldeChangeTypeBook(item){
    switch(item.name){
      case 'TextBook':
        this.labelTypeBook = item.name;
        this.listProduct = this.listProduct1;
        break;
      case 'Novel':
        this.labelTypeBook = item.name;
        this.listProduct = this.listProduct2;
        break;
      case 'Comic':
        this.labelTypeBook = item.name;
        this.listProduct = this.listProduct1;
        break;
      case 'Poem':
        this.labelTypeBook = item.name;
        this.listProduct = this.listProduct2;
        break;
      case 'Thriller':
        this.labelTypeBook = item.name;
        this.listProduct = this.listProduct1;
        break;
      case 'Short':
        this.labelTypeBook = item.name;
        this.listProduct = this.listProduct2;
        break;
    }
  }
  hanldeClickButtonMore(event){
    switch(event){
      case 'open':
        this.isClick = true;
        break;
      case 'close':
        this.isClick = false;
    }
  }
}
