import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Claim } from 'src/app/modals/claim';
import { Client } from 'src/app/modals/client';
import { User } from 'src/app/modals/user';
import { ClaimService } from 'src/app/services/claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-calim-request',
  templateUrl: './calim-request.component.html',
  styleUrls: ['./calim-request.component.css']
})
export class CalimRequestComponent implements OnInit {

  id:any;
  claim : Claim = new Claim();
  client : Client = new Client();
   constructor( private route: ActivatedRoute,
     private claimService: ClaimService, private userService: UserService) { }
 
   ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = params['id'];
     });
     this.getClaim();
   }
 
   
   getClaim(){
     console.log(this.id);
     this.claimService.getClaim(this.id).subscribe(
       response => {
         this.claim = response ; }
     );
   }
 
   onAcceptClaim() {
     
     this.claimService.acceptClaim(this.id)
     .subscribe(  (claim) => {
       this.userService.toastMessage("claim accepted")
     },(error) => {
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 
   onRefuseClaim() {
     this.claimService.refuseClaim(this.id)
     .subscribe(  (claim) => {
       this.userService.toastMessage("claim refused")
     },(error) =>{
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 }
