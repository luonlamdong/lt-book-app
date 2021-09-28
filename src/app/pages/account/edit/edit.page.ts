import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  @Input() editAccountInfo: boolean;
  isEdit = '';
  infor: any = [];
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      const currentNavigation = this.router.getCurrentNavigation();
      this.isEdit = currentNavigation.extras.state.isEdit;
      this.infor = currentNavigation.extras.state.inForAccount;
      console.log(currentNavigation);
    }
  }
  save() {
    if (this.isEdit === 'account') {
      const navigationExtras: NavigationExtras = {
        state: { isEdit: this.isEdit },
      };
      this.router.navigateByUrl('/account', navigationExtras);
    } else {
      const navigationExtras: NavigationExtras = {
        state: { isEdit: this.isEdit },
      };
      this.router.navigateByUrl('/account/payment',navigationExtras);
    }
  }
}
