import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/modals/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-bilan-conges-component',
  templateUrl: './bilan-conges-component.component.html',
  styleUrls: ['./bilan-conges-component.component.css']
})
export class BilanCongesComponentComponent implements OnInit {

  employe : Employe = new Employe();
  id : number; 
  employees: Employe[];
  p : number=1;
  constructor(private employeService:EmployeService,private router:Router) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getEmployeesList().subscribe(
      response => {
        this.employees = response; }
     );
  }

}
