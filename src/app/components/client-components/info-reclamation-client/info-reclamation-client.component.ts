import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../../../services/uploadfile.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {  ReclamationClient } from 'src/app/modals/reclamationClient';
import { Router } from '@angular/router';
import { ReclamationClientService } from 'src/app/services/reclamation-client.service';
@Component({
  selector: 'app-info-reclamation-client',
  templateUrl: './info-reclamation-client.component.html',
  styleUrls: ['./info-reclamation-client.component.css']
})
export class InfoReclamationClientComponent implements OnInit {

 
  public pj1: File;
  public pj2 : File;

  reclamation: ReclamationClient = new ReclamationClient();

  constructor(private reclamationService:ReclamationClientService,
              private uploadService: UploadfileService,
              private router: Router) { }

  ngOnInit() {
  }

  
   /*saveForm(submitForm: FormGroup){
     if (submitForm.valid){
       const user = submitForm.value;
       const formData = new formData;
       formData.append('user', user);
       formData.append('file', this.userFile);
       this.candidateService.saveUserProfile(formData).subscribe(  data => {
        alert("candidate created successfully");
      } );

     } else {
       this.validateFormFields(submitForm);
     }

     }*/

   

  createCandidate() {
    this.reclamationService.createReclamationClient(this.reclamation,this.pj1,this.pj2)
      .subscribe(  data => {
        alert("reclamation created successfully");
      } );
      this.router.navigate(['/response']);
    
    };


  selectFileLettre(event){
    this.pj2 = event.target.files[0];
  }
  selectFileCV(event){
    this.pj1 = event.target.files[0];
  }
  

  }
