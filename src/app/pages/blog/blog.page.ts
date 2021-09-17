import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  menuHeight;
  wherePage='blog';
  listBlog: any = [
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuHeight = window.innerHeight;
  }

  goDetail(){
    this.router.navigateByUrl('/blog/detail');
  }
}
