import { Component, OnInit, OnDestroy } from '@angular/core';
//input for receve an event
import { Post } from '../../post.model';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {


  postList: Post[] = [];
  private postSub: Subscription;

  constructor(

    //injection de depandence du service post
    public postServ: PostsService

  ) {}

  ngOnInit(): void {
    //console.log(this.postServ.getPosts)
    this.postList =this.postServ.getPosts();
    this.postSub = this.postServ.getPostUdateListener()
    .subscribe((posts: Post[])=>{

      this.postList = posts

    })


  }

  ngOnDestroy(): void {

    this.postSub.unsubscribe();
  }



}
