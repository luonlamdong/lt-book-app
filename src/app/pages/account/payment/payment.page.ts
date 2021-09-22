import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  menuHeight;
  wherePage = 'payment';
  listBill: any = [];
  listBook: any = [];
  listBillDetails: any = [];
  bill: any = {};
  billDetails: any = {};
  vnPay = true;
  total = 0;
  deliveryCharges = 40000;
  totalAmount = 0;
  //     idBill: '1023545',
  //     name: 'Đơn hàng MS0121',
  //     status: 'now',
  //     orderDaily: '16/09/2021',
  //     total: 500000,
  //     transportFee:25000
  constructor(private router: Router) {}

  ngOnInit() {
    this.menuHeight = innerHeight;
    if (this.router.getCurrentNavigation().extras.state) {
      const currentNavigation = this.router.getCurrentNavigation();
      this.listBook = currentNavigation.extras.state.listBook;
      this.listBill = currentNavigation.extras.state.listBill;
      this.listBillDetails = currentNavigation.extras.state.listBillDetails;
      console.log('Danh sách bill hiện tại', this.listBill);
      console.log('Danh sách book đã mua', this.listBook);
    }
    this.calculateTotalMoney();
  }
  editInfo() {
    this.router.navigateByUrl('/account/edit');
  }
  plus(item) {
    if (item.quantity <= 20) {
      item.quantity += 1;
      this.calculateTotalMoney();
    }
  }
  minus(item) {
    if (item.quantity !== 1) {
      item.quantity -= 1;
      this.calculateTotalMoney();
    }
  }
  calculateTotalMoney() {
    this.total = 0;
    this.listBook.forEach((e) => {
      this.total = this.total + e.price * e.quantity;
    });
    if (!this.vnPay) {
      this.totalAmount = this.total + this.deliveryCharges;
    } else {
      this.totalAmount =
        this.total + (this.total * 2) / 100 + this.deliveryCharges;
    }
  }
  choseMethod() {
    this.vnPay = !this.vnPay;
    this.calculateTotalMoney();
  }
  payment() {
    this.bill = {
      idBill: '1023549',
      name: 'Đơn hàng MS0121',
      status: 'now',
      orderDaily: '16/09/2021',
      total: this.totalAmount,
      transportFee: this.deliveryCharges,
    };
    this.billDetails = {
      idBill: '1023549',
      product: this.listBook,
      method: 'vnpay' ? this.vnPay : 'cashmoney',
    };
    this.listBill.push(this.bill);
    this.listBillDetails.push(this.billDetails);
    console.log(this.bill);
    console.log(this.billDetails);
    this.listBook=[];
    this.router.navigateByUrl('/account');
    // this.listBill.push({
    //   idBill: '1023549',
    //   name: 'Đơn hàng MS0121',
    //   status: 'now',
    //   orderDaily: '16/09/2021',
    //   total: this.totalAmount,
    //   transportFee: this.deliveryCharges,
    // });
  }
  // hocCnppm(){
  //   let baothuc = 1;
  //   // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  //   return function buonNgu(){
  //     return baothuc++;
  //   }
  // }
}
