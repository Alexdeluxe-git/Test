import {Component, OnInit} from '@angular/core';

export interface  Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ang';
  posts: Post[] = [
    {title: 'Wanna leratn angular', text: 'loremdfdfgdfgdfgfdgfdgf', id: 1},
    ];
  ngOnInit() {
    setTimeout(() => {
      console.log('timeout');
      this.posts[0].title = 'changed';
    }, 5000);
  }

  updatePosts(post: Post) {
      this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
