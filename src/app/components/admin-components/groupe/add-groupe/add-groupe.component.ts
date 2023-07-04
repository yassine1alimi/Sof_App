import { Component, OnInit, Inject } from '@angular/core';
import { Groupe } from 'src/app/modals/groupe';
import { GroupeService } from 'src/app/services/groupe.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartementService } from 'src/app/services/departement.service';
import { Departement } from 'src/app/modals/departement';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css']
})
export class AddGroupeComponent implements OnInit {

  groupes:Groupe[];
  departements: any[] = [];
  public groupe: Groupe = new Groupe();

  constructor(public dialogRef: MatDialogRef<AddGroupeComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Groupe,
    private groupeService:GroupeService, private departementService:DepartementService) { }

  ngOnInit() {
    if (this.data !== null){
      this.groupe = this.data;
    }
  }

  onSubmit(){
  
  this.onCreateGroupe();

  }

  onCreateGroupe():void {
    
    this.groupeService.createGroupe(this.groupe)
    .subscribe(  data => {
      this.onClose(this.groupe);
    });
  
    
  };
  getAllDepartements() {
    this.departementService.getDepartements().subscribe(
      response => {
        this.departements = response;
        console.log("resdept", response);
      }
    );
  }

  onClose(value:any){
    this.dialogRef.close(value);
  }

}
