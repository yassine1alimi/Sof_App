import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/modals/departement';
import { DepartementService } from 'src/app/services/departement.service';
import { AjouterDepartementComponent } from '../ajouter-departement/ajouter-departement.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Groupe } from 'src/app/modals/groupe';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  id:number;
  Groupes:Groupe[];
  isPopupOpened = false;
  departement : Departement = new Departement();
  editing: boolean = false;
  editingDepartement: Departement = new Departement();
  departements:Departement[];

  constructor(private dialog: MatDialog, private departementService:DepartementService,private router:Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.getAllDepartements();
  }

  onAddDepartement() {
    this.openDepartementDialog(null);
  }

  openDepartementDialog(data?:any){
    const dialogRef = this.dialog.open(AjouterDepartementComponent,{
      disableClose : true,
      autoFocus : true ,
      width : "50%",
      data : data
    });
    
    dialogRef.afterClosed().subscribe(result =>{
      if (result && data == null){
        this.departements.push(result);
      }}
   ); 
  }

  getAllDepartements(){
    this.departementService.getDepartements()
    .subscribe(
      response => {
        this.departements = response; }
     );
  }


  getGroupesOfDepartement(){
    this.departementService.getAllGroupesNamesByDepartement(this.id).subscribe(
      response => {
        this.Groupes = response; }
     );
  }


}
