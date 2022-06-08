import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private httpClient:HttpClient) { }


  public getPercentageGroupByType(){
    console.log('teststatistiqueType');
    return this.httpClient.get<any>("http://localhost:8087/percentageCountType",httpOptions);
  }


  public getPercentageGroupByStatus(){
    console.log('teststatistiqueStatus');
    return this.httpClient.get<any>("http://localhost:8087/percentageCountStatus",httpOptions);
  }
}
