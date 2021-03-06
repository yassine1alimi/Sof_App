import { Injectable } from '@angular/core';
import { Meeting } from '../modals/meeting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meeting : Meeting = new Meeting();
  constructor(private httpClient:HttpClient) { }

  getAllmeetings():Observable<any> {
  
    return this.httpClient.get<any>("http://localhost:8087/meetings",httpOptions);
   }

  public onCreateMeeting(meeting) {
   
   return this.httpClient.post<any>("http://localhost:8087/meetings/create",meeting);
  }

  public deleteMeetingById (id: number)  {
    return this.httpClient.delete("http://localhost:8087/meetings/delete"+"/" + id);
  }

  public updateMeeting(meeting:Meeting) {
    return this.httpClient.put("http://localhost:8087/meeting",meeting);
  }

  

  setter(meeting:Meeting){
    this.meeting= meeting;
  }

 getter(){
   return this.meeting;
 }

  

}
