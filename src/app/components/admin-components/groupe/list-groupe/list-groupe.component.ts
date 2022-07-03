import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/modals/groupe';
import { GroupeService } from 'src/app/services/groupe.service';
import { AddGroupeComponent } from '../add-groupe/add-groupe.component';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.css']
})
export class ListGroupeComponent implements OnInit {

  isPopupOpened = false;
  groupe : Groupe = new Groupe();
  editing: boolean = false;
  editingGroupe: Groupe = new Groupe();
  groupes:Groupe[];

  constructor(private dialog: MatDialog, private groupeService:GroupeService,private router:Router) { }

  ngOnInit() {
    this.getAllGroupes();
  }

  onAddGroupe() {
    this.openGroupeDialog(null);
  }

  openGroupeDialog(data?:any){
    const dialogRef = this.dialog.open(AddGroupeComponent,{
      disableClose : false,
      autoFocus : true ,
      width : "50%",
      data : data
    });
    
    dialogRef.afterClosed().subscribe(result =>{
      if (result && data == null){
        this.groupes.push(result);
      }}
   ); 
  }

  getAllGroupes(){
    this.groupeService.getGroupes()
    .subscribe(
      response => {
        this.groupes = response; }
     );
  }

  deleteGroupe(groupe:Groupe): void {
    this.groupeService.deleteGroupe(groupe.idGroupe)
      .subscribe( data => {
        this.groupes = this.groupes.filter(u => u !== groupe);
      })
    
  }


  
  

}
