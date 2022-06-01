import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departement } from '../modals/departement';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  departement: Departement = new Departement();

  private baseUrl = 'http://localhost:8087';

  constructor(private http:HttpClient) { }

  public getDepartements(){
    return this.http.get<any>(this.baseUrl + '/departements/',httpOptions);    
  }


  createDepartement(departementData: Departement) {
    return this.http.post(this.baseUrl + '/ajouterDepartement/', departementData);      
  }




  getAllGroupesNamesByDepartement(id:number){
    return this.http.get<any>(this.baseUrl+'/getAllGroupesNamesByDepartement'+id,httpOptions);
  }




}
