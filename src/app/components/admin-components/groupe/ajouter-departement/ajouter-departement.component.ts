import { Component, OnInit, Inject } from '@angular/core';
import { Departement } from 'src/app/modals/departement';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-ajouter-departement',
  templateUrl: './ajouter-departement.component.html',
  styleUrls: ['./ajouter-departement.component.css']
})
export class AjouterDepartementComponent implements OnInit {

  departements:Departement[];
  public departement: Departement = new Departement();

  constructor(public dialogRef: MatDialogRef<AjouterDepartementComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Departement,
    private departementService:DepartementService) { }

  ngOnInit() {
    if (this.data !== null){
      this.departement = this.data;
    }
  }

  onSubmit(){
  
  this.onCreateDepartement();

  }

  onCreateDepartement():void {
    
    this.departementService.createDepartement(this.departement)
    .subscribe(  data => {
      this.onClose(this.departement);
    });
  
  
  };


  onClose(value:any){
    this.dialogRef.close(value);
  }

}