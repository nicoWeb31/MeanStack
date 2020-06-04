import { Component, OnInit, Input } from '@angular/core';
//input for receve an event
import { Post } from '../../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //receve posts
  @Input() postList: Post[] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.postList)
  }

}
