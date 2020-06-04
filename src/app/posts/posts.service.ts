import { Injectable } from '@angular/core';
import { Post } from './post.model';
import  { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] =[];
  private postUdate = new Subject <Post[]>();

  constructor() { }


  getPosts(){
    return [...this.posts]
  }

  getPostUdateListener(){
    return this.postUdate.asObservable();
  }


  addPosts(title: string,content: string){
    const post: Post = {title: title, content: content}
    this.posts.push(post);
    this.postUdate.next([...this.posts])
  }


}
