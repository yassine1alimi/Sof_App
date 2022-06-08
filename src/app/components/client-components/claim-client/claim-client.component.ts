import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/modals/claim';
import { Client } from 'src/app/modals/client';
import { User } from 'src/app/modals/user';
import { ClaimService } from 'src/app/services/claim.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-claim-client',
  templateUrl: './claim-client.component.html',
  styleUrls: ['./claim-client.component.css']
})
export class ClaimClientComponent implements OnInit {
  claim: Claim = new Claim();
  id:number;
  claims:Claim[];
  user1: User = new User();
  client : Client = new Client();
  constructor(private claimService:ClaimService,private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.getClaimsOfUser();
    this.getUser();
  }

  getClaimsOfUser(){
    this.claimService.getClaimsOfUser(this.id).subscribe(
      response => {
        this.claims = response; }
     );
  }

  getUser() {
   
    this.userService.getUser(this.id).subscribe(
      response => {
        this.user1= response ;
        this.client = response;
       // this.employe.idUser = id;
     }
    );
  //  console.log(this.employe.nom+"eee");
  }

}