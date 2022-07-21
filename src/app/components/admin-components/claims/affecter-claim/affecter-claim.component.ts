import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Claim } from 'src/app/modals/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-affecter-claim',
  templateUrl: './affecter-claim.component.html',
  styleUrls: ['./affecter-claim.component.css']
})
export class AffecterClaimComponent implements OnInit {
/*
  claim: Claim = new Claim();
  minDate=new Date().toJSON().split('T')[0];
  constructor(
    public dialogRef: MatDialogRef<AffecterClaimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Claim,
    private claimService: ClaimService) { }

  ngOnInit() {
    if(this.data !== null){
      this.claim = this.data;
    }
    let minDate = new Date().toJSON().split('T')[0];
  }

  onSubmit() {
    this.onCreateClaim();
  }

  onCreateClaim(): void {
    this.claimService.affecterClaimGroupe(this.claim)
      .subscribe(data => {
        this.onClose(this.claim)
      });
  }

  onClose(value: any) {
    this.dialogRef.close(value);
  }
 

}
*/
private claim: Claim;

  constructor(private claimService:ClaimService,private router:Router) { }

  ngOnInit() {
    this.claim = this.claimService.getter();
    console.log("ngonit",this.claim);
    
  }

  processForm(){
      
    this.claimService.affecterClaimGroupe(this.claim).subscribe((claim)=> {
      console.log("claim",claim);
      this.router.navigate(['/list-claims']);
    },(error)=>{
      console.log(error);
    });
 }

}
