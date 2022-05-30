import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Presence } from '../modals/presence';
import { Observable } from 'rxjs';
import { Evenement } from '../modals/event';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  presence:Presence = new Presence();
  evenement: Evenement = new Evenement();
  
  constructor(private httpClient:HttpClient) { }

getPresences():Observable<any> {
  return this.httpClient.get<any> ("http//localhost:8087/presences",httpOptions);
}

public createPresence(presence)
{

  console.log(presence);
  return this.httpClient.post<any>("http://localhost:8087/createPresence",presence);

}

public addEvent(evenement:Evenement){
  return this.httpClient.post("http://localhost:8087/event",evenement);
}

public updateEvent(evenement:Evenement){
  return this.httpClient.put("http://localhost:8087/event",evenement);
}





public addPresence(presence:Presence,id:number){
  console.log("add prescense in service")
  console.log(presence)
  return this.httpClient.post<any>("http://localhost:8087/createPresence?id="+id,presence);

}

public getPresence (id:number){
  return this.httpClient.get<any>("http://localhost:8087/getPresence?id="+id,httpOptions);
}
}
