import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/modals/conge';
import { Employe } from 'src/app/modals/employe';
import { User } from 'src/app/modals/user';
import { CongeServiceService } from 'src/app/services/conge-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conge-employe-component',
  templateUrl: './conge-employe-component.component.html',
  styleUrls: ['./conge-employe-component.component.css']
})
export class CongeEmployeComponentComponent implements OnInit {

  conge: Conge = new Conge();
  id:number;
  conges:Conge[];
  user1: User = new User();
  employe : Employe = new Employe();
  constructor(private congeService:CongeServiceService,private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.getCongesOfUser();
    this.getUser();
  }

  getCongesOfUser(){
    this.congeService.getCongesOfUser(this.id).subscribe(
      response => {
        this.conges = response; }
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
