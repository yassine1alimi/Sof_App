import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Timesheet } from '../modals/timesheet';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private httpClient:HttpClient) { }


public ajouterTimesheet(idReclamation:number,idUser:number,dated:Date,datef:Date): Observable<any>{
  const data:FormData= new FormData();

  return this.httpClient.post<any>(`$http://localhost:8087/ajouterTimesheet/${idReclamation}/${idUser}/${dated}/${datef}`, { observe: 'response' });


}

}
/*
sendInvit(email: string, content: string): Observable<any> {
    return this.http.post<any>(`${this.resourceUrlMail}/${email}/${content}`, { observe: 'response' });
  }




getCompanyStatusFiltre(beginDate: string, endDate: string, statut: any): Observable<any[]> {
  return this.http.get<any[]>(`${this.resourceUrlFilter}/${beginDate}/${endDate}/${statut}`);
}
{dated}/{datef}
*/