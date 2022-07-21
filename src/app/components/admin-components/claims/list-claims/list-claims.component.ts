import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Claim } from 'src/app/modals/claim';
import { ClaimService } from 'src/app/services/claim.service';
import { AffecterClaimComponent } from '../affecter-claim/affecter-claim.component';
import { Router } from '@angular/router';
import { ClaimComponent } from '../claim/claim.component';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit {
  isPopupOpened = false;
  claim : Claim = new Claim() ;
  claims : any ;
    p : number=1;

  constructor(private claimService:ClaimService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getClaims();
  }
  onAddNote() {
    this.openNoteDialog(null)
   }
   openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(ClaimComponent, {
      disableClose: false,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.claims.push(result);
      }
      // this.refreshData();
    });
  }

  updateClaim(Claim:Claim) {  
    this.openNoteDialog(Claim);
    // this.meetingService.setter(meeting);
    // this.router.navigate(['/updateMeeting']);
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
