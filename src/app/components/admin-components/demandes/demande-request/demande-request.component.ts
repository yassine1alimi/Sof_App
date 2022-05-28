import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conge } from 'src/app/modals/conge';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/modals/employe';
import { CongeService } from 'src/app/services/conge.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-demande-request',
  templateUrl: './demande-request.component.html',
  styleUrls: ['./demande-request.component.css']
})
export class DemandeRequestComponent implements OnInit {
  id:any;
  conge : Conge = new Conge();
  employe : Employe = new Employe();
   constructor( private route: ActivatedRoute,private employeService:EmployeService,
     private congeService: CongeService, private userService: UserService) { }
 
   ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = params['id'];
     });
     this.getConge();
   }
 
   
   getConge(){
     console.log(this.id);
     this.congeService.getConge(this.id).subscribe(
       response => {
         this.conge = response ; }
     );
   }
 
   onAcceptConge() {
     
     this.congeService.acceptConge(this.id)
     .subscribe(  (conge) => {
       this.userService.toastMessage("Holiday accepted")
     },(error) => {
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 
   onRefuseConge() {
     this.congeService.refuseConge(this.id)
     .subscribe(  (conge) => {
       this.userService.toastMessage("Holiday refused")
     },(error) =>{
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 }
 
