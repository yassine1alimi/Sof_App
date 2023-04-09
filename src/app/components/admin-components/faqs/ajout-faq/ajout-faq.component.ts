import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Faq } from 'src/app/modals/faq';
import { FaqService } from 'src/app/services/faq.service';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { PostPayload } from 'src/app/modals/post-payload';
@Component({
  selector: 'app-ajout-faq',
  templateUrl: './ajout-faq.component.html',
  styleUrls: ['./ajout-faq.component.css']
})
export class AjoutFaqComponent implements OnInit {
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(public dialogRef:MatDialogRef<AjoutFaqComponent>,private addpostService: FaqService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    this.addPost();
    this.onClose();
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
    this.router.navigate(['/notesFaqs']);
    }, error => {
      console.log('Failure Response');
    })
  }

  onClose(){
    this.dialogRef.close();
  }
}


