import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../modals/employe';
import { Presence } from '../modals/presence';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  employe: Employe = new Employe();
  host :string = "http://localhost:8087";

  constructor(private httpClient:HttpClient){}

  public getEmployeesList()  {
    console.log("test call");
    return this.httpClient.get<any>("http://localhost:8087/users2", httpOptions);
  }

  public getEmploye(id: any){
    console.log("this is id ="+ id)
    return this.httpClient.get<any>("http://localhost:8087/user/"+ id,httpOptions);
  }

  public archiveEmploye(id: any){
    console.log("archive employeeeeeeeeeeeeeeeeeeeee")
    return this.httpClient.get<any>("http://localhost:8087/archiveEmploye/"+ id,httpOptions);
  }

  public getActiveEmployees(){
    return this.httpClient.get<any>("http://localhost:8087/activeEmployees",httpOptions);
  }

  public getArchivedEmployees(){
    return this.httpClient.get<any>("http://localhost:8087/archivedEmployees",httpOptions);
  }

  public generateReport(id: number){
    
    return this.httpClient.get<any>("http://localhost:8087/report/pdf/"+ id, httpOptions);
  }

  public deleteEmployeById (id: number)  {
    return this.httpClient.delete("http://localhost:8087/users"+"/" + id);
  }

  public editUser (employe:Employe)  {
    return this.httpClient.put("http://localhost:8087/updateUser",employe);
  }

  public editPhoto (fileImage:File,id:number)  {

    const data:FormData= new FormData();
    data.append('id',JSON.stringify(id));
    data.append('image',fileImage);
    return this.httpClient.put("http://localhost:8087/photo?id="+id,fileImage);
  }

  public updateEmployee(employe:Employe, fileImage:File) {
    const data:FormData= new FormData();
    data.append('user',JSON.stringify(employe));
    data.append('image',fileImage);
    return this.httpClient.put("http://localhost:8087/user",data);
  }
/*
  public createEmploye(employe: Employe, fileImage:File) {

    const data:FormData= new FormData();
    data.append('user',JSON.stringify(employe));
    data.append('image',fileImage);
    
    return this.httpClient.post<Employe>("http://localhost:8087/employees/create", data);
  }
*/
public createEmploye(employe: Employe,photo:File) {
  
  const data:FormData= new FormData();
  data.append('user',JSON.stringify(employe));
  data.append('photo',photo);
  return this.httpClient.post<Employe>("http://localhost:8087/createEmploye", data);
}
  setter(employe:Employe){
    this.employe= employe;
  }

 getter(){
   return this.employe;
 }

  

  
}
