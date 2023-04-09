import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../modals/contact';
import { Observable } from 'rxjs';
import { PostPayload } from '../modals/post-payload';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact: Contact = new Contact;

  constructor(private httpClient:HttpClient) { }


  getAllContact():Observable<any> {
    return this.httpClient.get<any>("http://localhost:8087/contacts",httpOptions);
   }

  

  public deleteContactById (id: number)  {
    return this.httpClient.delete("http://localhost:8087/contacts"+"/" + id);
  }

  public updateContact(contact:Contact) {
    return this.httpClient.put("http://localhost:8087/annoncecontact",contact);
  }

  setter(contact:Contact){
    this.contact= contact;
  }

  getter(){
   return this.contact;
 }

 addContact(contactData: Contact){
  return this.httpClient.post('http://localhost:8087/createContact', contactData);
}


}
