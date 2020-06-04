
import { Component, EventEmitter,Output } from '@angular/core';
//EventEmitter for emit event
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  contentPost ='';
  enteredTitle = '';

  //event emoiter, output for transfer data from to outsid (to app component) tag<Post>
  @Output() postCreated = new EventEmitter<Post>();


  onAddPost(form: NgForm){

    if(form.invalid) return;

      const post: Post = {

        title: form.value.title,
        content: form.value.content
      };
      //emit the new post
      console.log(post)
      this.postCreated.emit(post);

  }


}
