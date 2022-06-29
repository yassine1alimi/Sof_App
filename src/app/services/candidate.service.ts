import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ReclamationClient } from '../modals/reclamationClient';
import { MatSnackBar } from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  reclamationClient: ReclamationClient = new ReclamationClient();
  constructor(private httpClient:HttpClient, private _snackbar: MatSnackBar) { }

  public createCandidate(reclamationClient: ReclamationClient, pj1:File, pj2:File) {

    const data:FormData= new FormData();
    data.append('reclamationClient',JSON.stringify(reclamationClient));
    data.append('pj1',pj1);
    data.append('pj2',pj2);

    return this.httpClient.post<ReclamationClient>("http://localhost:8087/createreclamationClient", data);
  }

  public getCandidatesList(){
    console.log('test');
    return this.httpClient.get<any>("http://localhost:8087/reclamationClients");
  }

  public getCandidate(id: number){
    return this.httpClient.get<ReclamationClient>("http://localhost:8087/reclamationClient"+"/"+ id);
  }

  public downloadFile(pj1:String){
    
    return this.httpClient.get<any>("http://localhost:8087//downloadFile"+"/"+ pj1);
  }

  public sendConfirmMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8087/sendConfirmMessage/"+ id);
  }

  public sendDenyMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8087/sendDenyMessage/"+ id);
  }

  deleteCandidate(id: number) {
    return this.httpClient.delete("http://localhost:8087/reclamationClient/" + id);
      
  }

  toastMessage(message){
    this._snackbar.open(message, 'Close', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      
     })
  }

  

/*
  saveUserProfile(formData: FormData){
    return this.httpClient.post("http://localhost:8080/candidats/create", formData);
    
  }*/
}
