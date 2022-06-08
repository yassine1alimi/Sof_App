import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Claim } from 'src/app/modals/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit {
  isPopupOpened = false;
  claim : Claim = new Claim();
  claims : any;
  p : number=1;

  constructor(private claimService:ClaimService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getClaims();
  }

  getClaims(){
    this.claimService.getClaimsList().subscribe(
      response => {
        this.claims = response
      console.log(response)}
     );
     
  }

  

  onAcceptClaim(id) {
    console.log(id+"hell");
    this.claimService.acceptClaim(id)
    .subscribe(  data => {
      alert("claim accepted");
    });
  };

  onRefuseClaim(id) {
    this.claimService.refuseClaim(id)
    .subscribe(  data => {
      alert("claim refused");
    });
  };

  onDeleteClaim(id){
    this.claimService.deleteClaim(id)
    .subscribe(  data => {
      alert("claim deleted successfully");
    });
  }



}
