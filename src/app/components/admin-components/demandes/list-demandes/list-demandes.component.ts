import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/modals/demande';
import { DemandeService } from 'src/app/services/demande.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {

  isPopupOpened = false;
  demande : Demande = new Demande();
  demandes : any;
  constructor(private demandeService:DemandeService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getDemandes();
  }

  getDemandes(){
    this.demandeService.getDemandesList().subscribe(
      response => {
        this.demandes = response
      console.log(response)}
     );
     
  }

  

  onAcceptDemande(id) {
    console.log(id+"hell");
    this.demandeService.acceptDemande(id)
    .subscribe(  data => {
      alert("demande accepted");
    });
  };

  onRefuseDemande(id) {
    this.demandeService.refuseDemande(id)
    .subscribe(  data => {
      alert("demande refused");
    });
  };

  onDeletedemande(id){
    this.demandeService.deleteDemande(id)
    .subscribe(  data => {
      alert("demande deleted successfully");
    });
  }



}
