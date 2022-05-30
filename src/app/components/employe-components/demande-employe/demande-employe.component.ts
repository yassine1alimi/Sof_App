import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from 'src/app/modals/demande';
import { User } from 'src/app/modals/user';
import { Employe } from 'src/app/modals/employe';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-demande-employe',
  templateUrl: './demande-employe.component.html',
  styleUrls: ['./demande-employe.component.css']
})
export class DemandeEmployeComponent implements OnInit {

  demande: Demande = new Demande();
  id:number;
  demandes:Demande[];
  user1: User = new User();
  employe : Employe = new Employe();
  constructor(private demandeService:DemandeService,private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.getDemandesOfUser();
    this.getUser();
  }

  getDemandesOfUser(){
    this.demandeService.getDemandesOfUser(this.id).subscribe(
      response => {
        this.demandes = response; }
     );
  }

  getUser() {
   
    this.userService.getUser(this.id).subscribe(
      response => {
        this.user1= response ;
        this.employe = response;
       // this.employe.idUser = id;
     }
    );
  //  console.log(this.employe.nom+"eee");
  }

}