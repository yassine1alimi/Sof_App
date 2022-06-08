import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../modals/departement';
import { Groupe } from '../modals/groupe';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  groupe: Groupe = new Groupe();

  private baseUrl = 'http://localhost:8087';


  constructor(private http:HttpClient) { }

  public getGroupes(){
    return this.http.get<any>(this.baseUrl + '/groupes/',httpOptions);    
  }


  createGroupe(groupeData: Groupe) {
    return this.http.post(this.baseUrl + '/ajouterGroupe/', groupeData);      
  }

  deleteGroupe(id: number) {
    return this.http.delete(this.baseUrl + '/groupes'+'/' + id);
      
  }


  

}
