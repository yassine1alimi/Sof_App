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
export class ReclamationClientService {
  reclamationClient: ReclamationClient = new ReclamationClient();
  constructor(private httpClient:HttpClient, private _snackbar: MatSnackBar) { }

  public createReclamationClient(reclamationClient: ReclamationClient, pj1:File, pj2:File) {

    const data:FormData= new FormData();
    data.append('reclamationClient',JSON.stringify(reclamationClient));
    data.append('pj1',pj1);
    data.append('pj2',pj2);

    return this.httpClient.post<ReclamationClient>("http://localhost:8087/createreclamationClient", data);
  }

  public getReclamationClientsList(){
    console.log('test');
    return this.httpClient.get<any>("http://localhost:8087/ReclamationClients",httpOptions);
  }

  public getReclamationClient(id: number){
    return this.httpClient.get<ReclamationClient>("http://localhost:8087/getreclamationClient/"+ id,httpOptions);
  }

  public downloadFile(pj1:String){
    
    return this.httpClient.get<any>("http://localhost:8087//downloadFile"+"/"+ pj1,httpOptions);
  }

  public sendConfirmMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8087/sendConfirmMessage/"+ id,httpOptions);
  }

  public sendDenyMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8087/sendDenyMessage/"+ id,httpOptions);
  }

  deleteReclamationClient(id: number) {
    return this.httpClient.delete("http://localhost:8087/reclamationClient/" + id);
      
  }

  toastMessage(message){
    this._snackbar.open(message, 'Close', {
      duration: 10000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
     })
  }

  

/*
  saveUserProfile(formData: FormData){
    return this.httpClient.post("http://localhost:8080/candidats/create", formData);
    
  }*/
}