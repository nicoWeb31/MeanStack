import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {title: 'First post', content:' this is the first posts content'},
    {title: 'Second post', content:' this is the second posts content'},
    {title: 'Third post', content:' this is the third posts content'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
