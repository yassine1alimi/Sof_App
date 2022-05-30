import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Demande } from '../modals/demande';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  demande : Demande = new Demande();
  constructor(private httpClient:HttpClient) { }

  public createDemandeDemande(demande:Demande, id:number){
    return this.httpClient.post<Demande>("http://localhost:8087/createDemande?id="+id,demande);

  }



  getDemandesList(){
    return this.httpClient.get<any>("http://localhost:8087/demandes_attente",httpOptions);
  }

  getDemandesOfUser(id:number){
    return this.httpClient.get<any>("http://localhost:8087/demandeUser/"+id,httpOptions);
  }



  acceptDemande(id: number) {
    return this.httpClient.get<any>("http://localhost:8087/accepter?id="+id,httpOptions);

  }

  public getDemande(id: any){
    console.log("this is id ="+ id)
    return this.httpClient.get<any>("http://localhost:8087/demande/"+ id,httpOptions);
  }
  
  

  refuseDemande(id: number){
    return this.httpClient.get<any>("http://localhost:8087/refuser?id="+id,httpOptions);
  }

  deleteDemande(id:number){
    return this.httpClient.delete("http://localhost:8087/deleteDemande/"+id);
  }

}
