import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  blogDetail: any = {};
  listBlogRelate: any = [
    {
      imageUrl: 'assets/images/book.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book2.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book3.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book2.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book3.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      day: 'Thu, 9 2021',
    }
  ];
  constructor(private router: Router,private route: ActivatedRoute, private loadingController: LoadingController,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        const currentNavigation = this.router.getCurrentNavigation();
        const product = currentNavigation.extras.state.item;
        this.blogDetail = product;
      }
    });
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 500,
      translucent: true,
      backdropDismiss: true,
      animated: true,
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async showBlogRelate(item) {
    await this.presentLoadingWithOptions();
    this.content.scrollToTop();
    this.blogDetail = item;
  }
}
