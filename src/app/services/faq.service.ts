import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Faq } from '../modals/faq';
import { Observable } from 'rxjs';
import { PostPayload } from '../modals/post-payload';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faq: Faq = new Faq;
  
  constructor(private httpClient:HttpClient) { }

  getAllFaq():Observable<any> {
    return this.httpClient.get<any>("http://localhost:8087/faqs",httpOptions);
   }

  /*public onCreateNoteInterne(noteInterne) {
   return this.httpClient.post<any>("http://localhost:8080/createNoteInterne",noteInterne);
  }*/

  public deleteFaqById (id: number)  {
    return this.httpClient.delete("http://localhost:8087/faqs"+"/" + id);
  }

  public updateFaq(faq:Faq) {
    return this.httpClient.put("http://localhost:8087/annoncefaq",faq);
  }

  setter(faq:Faq){
    this.faq= faq;
  }

  getter(){
   return this.faq;
 }

 addPost(postPayload: PostPayload){
  return this.httpClient.post('http://localhost:8087/createFaq', postPayload);
}


}