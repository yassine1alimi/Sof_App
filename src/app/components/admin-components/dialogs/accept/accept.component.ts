import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from 'src/app/modals/demande';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  demande: Demande = new Demande();

  constructor(public dialogRef: MatDialogRef<AcceptComponent>, private demandeService:DemandeService) { }

  ngOnInit() {
  }

  onSubmit(){
  
    this.onAcceptDemande();
    this.onClose();
   
    }
  
    onAcceptDemande():void {
      this.demandeService.acceptDemande(this.demande.idDemande)
      .subscribe(  data => {
        alert("Demande accepted");
      });
    };
  
    onClose(){
     this.dialogRef.close();
    }

}
