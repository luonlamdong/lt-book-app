import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  menuHeight;
  wherePage='product';
  backgroundShadow: any = false;
  labelTypeBook: any = '';
  listProduct: any = [];
  listProduct1: any = [
    {
      imageURL: 'assets/images/book.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 2000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 2000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book3.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 2000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book4.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 2000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book5.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 2000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book6.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 2000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    }
  ];
  listProduct2: any = [
    {
      imageURL: 'assets/images/book7.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 1000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book6.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 1000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book5.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 1000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book4.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 1000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book3.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 1000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
    },
    {
      imageURL: 'assets/images/book2.jpg',
      name: 'identity theft',
      price: '50.000',
      rating: 4,
      sold: 1000,
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      artist: 'Thái Duy Linh',
      birthday: '20/09/2000',
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
    this.menuHeight = window.innerHeight;
  }

  goDetail(product){
    const navigationExtras: NavigationExtras = {
      state: { item: product },
    };
    this.router.navigateByUrl('/product/detail', navigationExtras);
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
