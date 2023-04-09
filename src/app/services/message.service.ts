import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../modals/message';
import { Modelx } from '../modals/Modelx';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {}


  public chatService(userName : string){
    return this.http.get("http://localhost:8087/showMessage/"+userName);            
 }

 public discussService(object : Modelx){
  return this.http.post("http://localhost:8087/showChat/",object);            
}
public sendMessage(m : Message){
return this.http.post("http://localhost:8087/sendMessage",m,{responseType : 'text' as 'json'});
}
}
