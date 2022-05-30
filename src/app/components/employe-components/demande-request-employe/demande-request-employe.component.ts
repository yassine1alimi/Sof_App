import { Component, OnInit } from '@angular/core';
import {NgbModalConfig , NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from 'src/app/modals/demande';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-demande-request-employe',
  templateUrl: './demande-request-employe.component.html',
  styleUrls: ['./demande-request-employe.component.css']
})
export class DemandeRequestEmployeComponent implements OnInit {

  demande: Demande = new Demande();
  id : number;
  constructor( private demandeService:DemandeService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) {
    
  }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
  }

  createDemandeDemande():void {
    this.demandeService.createDemandeDemande(this.demande,this.id)
    .subscribe( data => {
      this.userService.toastMessage("Demand created successfully")
     },(error) => {
      this.userService.toastMessage("failed action")
  }
  );
}

}


