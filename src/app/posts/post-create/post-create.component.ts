
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  contentPost ='';
  enteredTitle = '';

  constructor(
    //injection du serveice
    public postServ: PostsService){

  }



  onAddPost(form: NgForm){

    if(form.invalid) return;

    this.postServ.addPosts(form.value.title,form.value.content);
    form.resetForm();

  }


}
