import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/modals/demande';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/modals/employe';
import { DemandeService } from 'src/app/services/demande.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-demande-request',
  templateUrl: './demande-request.component.html',
  styleUrls: ['./demande-request.component.css']
})
export class DemandeRequestComponent implements OnInit {
  id:any;
  demande : Demande = new Demande();
  employe : Employe = new Employe();
   constructor( private route: ActivatedRoute,private employeService:EmployeService,
     private demandeService: DemandeService, private userService: UserService) { }
 
   ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = params['id'];
     });
     this.getDemande();
   }
 
   
   getDemande(){
     console.log(this.id);
     this.demandeService.getDemande(this.id).subscribe(
       response => {
         this.demande = response ; }
     );
   }
 
   onAcceptDemande() {
     
     this.demandeService.acceptDemande(this.id)
     .subscribe(  (demande) => {
       this.userService.toastMessage("demande accepted")
     },(error) => {
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 
   onRefuseDemande() {
     this.demandeService.refuseDemande(this.id)
     .subscribe(  (demande) => {
       this.userService.toastMessage("demande refused")
     },(error) =>{
       this.userService.toastMessage("failed action")
     }
     );
   };
 
 }
 
