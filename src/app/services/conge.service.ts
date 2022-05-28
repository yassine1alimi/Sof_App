import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge } from '../modals/conge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  conge : Conge = new Conge();
  constructor(private httpClient:HttpClient) { }

  public createDemandeConge(conge:Conge, id:number){
    return this.httpClient.post<Conge>("http://localhost:8087/createDemande?id="+id,conge);

  }



  getCongesList(){
    return this.httpClient.get<any>("http://localhost:8087/demandes_attente");
  }

  getCongesOfUser(id:number){
    return this.httpClient.get<any>("http://localhost:8087/demandeUser/"+id);
  }



  acceptConge(id: number) {
    return this.httpClient.get<any>("http://localhost:8087/accepter?id="+id);

  }

  public getConge(id: any){
    console.log("this is id ="+ id)
    return this.httpClient.get<any>("http://localhost:8087/demande/"+ id);
  }
  
  

  refuseConge(id: number){
    return this.httpClient.get<any>("http://localhost:8087/refuser?id="+id);
  }

  deleteConge(id:number){
    return this.httpClient.delete("http://localhost:8087/deleteDemande/"+id);
  }

}
