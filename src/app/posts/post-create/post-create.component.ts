
import { Component } from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  contentPost ='';
  newPost = '';

  onAddPost(){
    // alert('post add')
    this.newPost = this.contentPost
  }


}
