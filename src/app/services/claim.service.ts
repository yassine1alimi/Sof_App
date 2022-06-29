import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../modals/claim';
import 'rxjs/add/operator/map'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}
@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  claim : Claim = new Claim();
  constructor(private httpClient:HttpClient) { }

  public createDemandeClaim(claim:Claim, id:number){
    return this.httpClient.post<Claim>("http://localhost:8087/createClaim?id="+id,claim);

  }



  getClaimsList(){
    return this.httpClient.get<any>("http://localhost:8087/claims_attente",httpOptions);
  }

  getClaimsOfUser(id:number){
    return this.httpClient.get<any>("http://localhost:8087/claimUser/"+id,httpOptions);
  }



  acceptClaim(id: number) {
    return this.httpClient.get<any>("http://localhost:8087/accepterClaim?id="+id,httpOptions);

  }

  public getClaim(id: any){
    console.log("this is id ="+ id)
    return this.httpClient.get<any>("http://localhost:8087/claim/"+ id,httpOptions);
  }
  
  

  refuseClaim(id: number){
    return this.httpClient.get<any>("http://localhost:8087/refuserClaim?id="+id,httpOptions);
  }

  deleteClaim(id:number){
    return this.httpClient.delete("http://localhost:8087/deleteClaim/"+id);
  }

}