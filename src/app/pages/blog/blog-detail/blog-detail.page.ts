import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  blogDetail: any = {};
  loading: any = false;
  listBlogRelate: any = [
    {
      imageUrl: 'assets/images/book.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      paragraph: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book2.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      paragraph: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book3.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      paragraph: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book2.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      paragraph: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      day: 'Thu, 9 2021',
    },
    {
      imageUrl: 'assets/images/book3.jpg',
      name: 'Hôm nay là thứ mấy?',
      content: 'Em không là nàng thơ, em là nàng kiểu lỡ bước',
      paragraph: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      day: 'Thu, 9 2021',
    }
  ];
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        const currentNavigation = this.router.getCurrentNavigation();
        const product = currentNavigation.extras.state.item;
        this.blogDetail = product;
      }
    });
  }
  async handleloading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.content.scrollToTop();
    }, 1200);
  }

  async showBlogRelate(item) {
    await this.handleloading();
    this.blogDetail = item;
  }
}
