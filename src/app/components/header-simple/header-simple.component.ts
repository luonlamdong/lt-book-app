
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-simple',
  templateUrl: './header-simple.component.html',
  styleUrls: ['./header-simple.component.scss'],
})
export class HeaderSimpleComponent implements OnInit {
  @Input() menuHeight: number;
  @Input() wherePage: string;
  showMenu = false;
  constructor(private router: Router) { }

  ngOnInit() {}
  clickMenu() {
    this.showMenu = !this.showMenu;
  }
  async login() {
    this.showMenu = !this.showMenu;
    setTimeout(async () => {
      await this.router.navigateByUrl('/login');
    }, 1500);
  }
  goHome() {
    this.showMenu = !this.showMenu;
    setTimeout(async () => {
      await this.router.navigateByUrl('/home');
    }, 1500);
  }
  goProduct() {}
  goAbout() {}
  goContact(){
    this.showMenu = !this.showMenu;
    setTimeout(async () => {
      await this.router.navigateByUrl('/contact');
    }, 1500);
  }
}
