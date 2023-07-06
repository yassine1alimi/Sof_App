import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conge } from 'src/app/modals/conge';
import { Employe } from 'src/app/modals/employe';
import { CongeServiceService } from 'src/app/services/conge-service.service';
import { EmployeService } from 'src/app/services/employe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conge-request-component',
  templateUrl: './conge-request-component.component.html',
  styleUrls: ['./conge-request-component.component.css']
})
export class CongeRequestComponentComponent implements OnInit {

  id:any;
 conge : Conge = new Conge();
 employe : Employe = new Employe();
  constructor( private route: ActivatedRoute,private employeService:EmployeService,
    private congeService: CongeServiceService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getConge();
  }

  
  getConge(){
    console.log(this.id);
    this.congeService.getConge(this.id).subscribe(
      response => {
        this.conge = response ; }
    );
  }

  onAcceptConge() {
    
    this.congeService.acceptConge(this.id)
    .subscribe(  (conge) => {
      this.userService.toastMessage("Holiday accepted")
    },(error) => {
      this.userService.toastMessage("failed action")
    }
    );
  };


  onRefuseConge() {
    this.congeService.refuseConge(this.id)
    .subscribe(  (conge) => {
      this.userService.toastMessage("Holiday refused")
    },(error) =>{
      this.userService.toastMessage("failed action")
    }
    );
  };

}
