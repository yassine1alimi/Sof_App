import { Injectable } from '@angular/core';
import { Conge } from '../modals/conge';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongeServiceService {

  conge : Conge = new Conge();
  constructor(private httpClient:HttpClient) { }

  public createDemandeConge(conge:Conge, id:number){
    return this.httpClient.post<Conge>("http://localhost:8087/createConge?id="+id,conge);

  }



  getCongesList(){
    return this.httpClient.get<any>("http://localhost:8087/conges_attente");
  }

  getCongesOfUser(id:number){
    return this.httpClient.get<any>("http://localhost:8087/congeUser/"+id);
  }



  acceptConge(id: number) {
    return this.httpClient.get<any>("http://localhost:8087/accepterConge?id="+id);

  }

  public getConge(id: any){
    console.log("this is id ="+ id)
    return this.httpClient.get<any>("http://localhost:8087/conge/"+ id);
  }
  
  

  refuseConge(id: number){
    return this.httpClient.get<any>("http://localhost:8087/refuserConge?id="+id);
  }

  deleteConge(id:number){
    return this.httpClient.delete("http://localhost:8087/deleteConge/"+id);
  }}
