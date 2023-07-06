import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/modals/conge';
import { CongeServiceService } from 'src/app/services/conge-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demande-conge-component',
  templateUrl: './demande-conge-component.component.html',
  styleUrls: ['./demande-conge-component.component.css']
})
export class DemandeCongeComponentComponent implements OnInit {

  conge: Conge = new Conge();
  id : number;
  constructor( private congeService:CongeServiceService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) {
    
  }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
  }

  createDemandeConge():void {
    this.congeService.createDemandeConge(this.conge,this.id)
    .subscribe( data => {
      this.userService.toastMessage("Demand created successfully")
     },(error) => {
      this.userService.toastMessage("failed action")
  }
  );
}
}
