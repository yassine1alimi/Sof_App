import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReclamationClient } from 'src/app/modals/reclamationClient';
import { ReclamationClientService } from 'src/app/services/reclamation-client.service';

@Component({
  selector: 'app-list-reclamations1',
  templateUrl: './list-reclamations1.component.html',
  styleUrls: ['./list-reclamations1.component.css']
})
export class ListReclamations1Component implements OnInit {

  isPopupOpened = false;
  reclamationClient : ReclamationClient = new ReclamationClient();
  reclamationClients : any;
  constructor(private reclamationClientService:ReclamationClientService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getReclamationClients();
  }

  getReclamationClients(){
    this.reclamationClientService.getReclamationClientsList1().subscribe(
      response => {
        this.reclamationClients = response
      console.log(response)}
     );
     
  }

  

  onAcceptReclamationClient(id) {
    console.log(id+"hell");
    this.reclamationClientService.acceptReclamationClient(id)
    .subscribe(  data => {
      alert("reclamationClient accepted");
    });
  };

  onRefuseReclamationClient(id) {
    this.reclamationClientService.refuseReclamationClient(id)
    .subscribe(  data => {
      alert("reclamationClient refused");
    });
  };

  onDeleteReclamationClient(id){
    this.reclamationClientService.deleteReclamationClient1(id)
    .subscribe(  data => {
      alert("reclamationClient deleted successfully");
    });
  }



}
