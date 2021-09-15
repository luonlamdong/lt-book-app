import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  menuHeight;
  wherePage = 'account';
  type = 'cart';
  cartProduct = [
    {
      name: 'Mysthem',
      img: './assets/images/book2.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
    {
      name: 'Mysthemme',
      img: './assets/images/book3.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
    {
      name: 'Mysthemme',
      img: './assets/images/book4.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
    {
      name: 'Mysthemme',
      img: './assets/images/book1.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
    {
      name: 'Mysthemme',
      img: './assets/images/book5.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
  ];
  boughtProduct = [
    {
      name: 'Mysthem',
      img: './assets/images/book1.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
    {
      name: 'Mysthemme',
      img: './assets/images/book4.jpg',
      isCheck: false,
      price: 50000,
      quantity: 5,
    },
  ];
  chooseAll = true;
  allProduct = [];
  constructor() {}

  ngOnInit() {
    this.menuHeight = window.innerHeight;
    console.log(this.cartProduct.length);
  }
  onChangeType(type) {
    this.type = type;
  }
  checkAll() {
    this.chooseAll = !this.chooseAll;
    if (this.type === 'cart') {
      if (!this.chooseAll) {
        this.cartProduct.forEach((e) => {
          e.isCheck = true;
        });
      } else {
        this.cartProduct.forEach((e) => {
          e.isCheck = false;
        });
      }
    } else if (this.type === 'bought') {
      if (!this.chooseAll) {
        this.boughtProduct.forEach((e) => {
          e.isCheck = true;
        });
      } else {
        this.boughtProduct.forEach((e) => {
          e.isCheck = false;
        });
      }
    }
  }
  chooseBook(item) {
    item.isCheck = !item.isCheck;
  }
  delete() {
    if (this.type === 'cart') {
      this.cartProduct =
        _.filter([...this.cartProduct], (o) => o.isCheck === false) || [];
    } else if (this.type === 'bought') {
      this.boughtProduct =
        _.filter([...this.boughtProduct], (o) => o.isCheck === false) || [];
    }
  }
  payment() {
    this.cartProduct.forEach((e) => {
      if (e.isCheck === true) {
        this.allProduct.push(e);
      }
    });
    this.boughtProduct.forEach((e) => {
      if (e.isCheck === true) {
        this.allProduct.push(e);
      }
    });
    console.log(this.allProduct);
  }
}
