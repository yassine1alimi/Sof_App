import { Component, OnInit } from '@angular/core';
import {  EmployeService } from '../../../services/employe.service';
import { Observable } from 'rxjs';
import { Employe } from '../../../modals/employe';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { Timesheet } from 'src/app/modals/timesheet';
@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {
  employe : Employe = new Employe();
  idUser : number; 
  employees: Employe[];
  Employe: Employe = new Employe ;
  timesheet: Timesheet = new Timesheet();
  idReclamation:number;
  constructor(private employeService:EmployeService,private router:Router, 
    private userService: UserService,private timesheetService:TimesheetService,private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getEmployees();
    this.idReclamation = +this.route.snapshot.params.idReclamation;

  }




  getEmployees(){
    this.employeService.getEmployeesList().subscribe(
      response => {
        this.employees = response; }
     );
  }

  ajouterTimesheet():void{
    this.timesheetService.ajouterTimesheet(this.idReclamation,this.idUser,this.timesheet.dateDebut,this.timesheet.dateFin)
    .subscribe(  data => {
      alert("timesheet created successfully");
    } );
  };



  onOptionsSelected(option:any){
    this.idUser=option;
  }
}
