import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationClient } from 'src/app/modals/reclamationClient';
import { ReclamationClientService } from 'src/app/services/reclamation-client.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  reclamationClient: ReclamationClient= new ReclamationClient();
  id : number;
  public pj1: File;
  public pj2 : File;
  constructor(private reclamationClientService:ReclamationClientService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {

    const user = this.tokenStorageService.getUser();
    this.id = user.id;
  }




  createreclamation1():void {
    this.reclamationClientService.createReclamationClient1(this.reclamationClient,this.pj1,this.pj2,this.id)
    .subscribe( data => {
      this.userService.toastMessage("claim created successfully")
     },(error) => {
      this.userService.toastMessage("failed action")
  }
  );
}


  selectFileLettre(event: { target: { files: File[]; }; }){
    this.pj2 = event.target.files[0];
  }
  selectFileCV(event: { target: { files: File[]; }; }){
    this.pj1 = event.target.files[0];
  }
  

  }

