import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationClient } from 'src/app/modals/reclamationClient';
import { User } from 'src/app/modals/user';
import { ReclamationClientService } from 'src/app/services/reclamation-client.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reclamation-request',
  templateUrl: './reclamation-request.component.html',
  styleUrls: ['./reclamation-request.component.css']
})
export class ReclamationRequestComponent implements OnInit {

  id:any;
  reclamationClient : ReclamationClient = new ReclamationClient();
  client : User = new User();
   constructor( private route: ActivatedRoute,private userService:UserService,
     private reclamationClientService: ReclamationClientService) { }
 
   ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = params['id'];
     });
     this.getReclamation();
   }
 
   
   getReclamation(){
     console.log(this.id);
     this.reclamationClientService.getReclamationClient(this.id).subscribe(
       response => {
         this.reclamationClient = response ; }
     );
   }
 
   onAcceptReclamation() {
     
     this.reclamationClientService.acceptReclamationClient(this.id)
     .subscribe(  (reclamationClient) => {
       this.userService.toastMessage("reclamationClient accepted")
     },(error) => {
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 
   onRefuseReclamation() {
     this.reclamationClientService.refuseReclamationClient(this.id)
     .subscribe(  (reclamationClient) => {
       this.userService.toastMessage("reclamationClient refused")
     },(error) =>{
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 }
 
