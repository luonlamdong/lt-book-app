import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  menuHeight;
  wherePage = 'account';
  type = 'cart';
  account = {
    name: 'Josh Germany',
    position: 'Member',
    address: '9/4 Tân Tiến, XTĐ, HM',
    phone: '0344153437',
    email: 'trung08052000@gmail.com',
    avtUrl: './assets/images/avt.jpg',
  };
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
      img: './assets/images/book.jpg',
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
      img: './assets/images/book.jpg',
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
  listBillProduct = [
    {
      idBill: '1023545',
      name: 'Đơn hàng MS0121',
      status: 'now',
      orderDaily: '16/09/2021',
      total: 500000,
    },
    {
      idBill: '1023546',
      name: 'Đơn hàng MS0123',
      status: 'now',
      orderDaily: '16/09/2021',
      total: 500000,
    },
    {
      idBill: '1023547',
      name: 'Đơn hàng MS0121',
      status: 'done',
      orderDaily: '16/09/2021',
      total: 500000,
    },
    {
      idBill: '1023548',
      name: 'Đơn hàng MS0124',
      status: 'done',
      orderDaily: '16/09/2021',
      total: 500000,
    },
  ];
  listBillProductDetail = [
    {
      idBill: '1023545',
      product: [
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
      ],
    },
    {
      idBill: '1023546',
      product: [
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
      ],
    },
    {
      idBill: '1023547',
      product: [
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
      ],
    },
    {
      idBill: '1023548',
      product: [
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
        {
          name: 'Mysthem',
          img: './assets/images/book2.jpg',
          isCheck: false,
          price: 50000,
          quantity: 5,
        },
      ],
    },
  ];
  billProductDetail = {
    idBill: '',
    product: [],
  };
  chooseAll = true;
  allProduct = [];
  constructor(private router: Router) {}

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
  billDetail(item) {
    console.log(item);
  }
  editInfo() {
    this.router.navigateByUrl('/account/edit');
  }
}
