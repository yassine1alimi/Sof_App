import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Claim } from 'src/app/modals/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claim: Claim = new Claim();
  minDate=new Date().toJSON().split('T')[0];
  constructor(
    public dialogRef: MatDialogRef<ClaimComponent>,
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
    this.claimService.onCreateClaim(this.claim)
      .subscribe(data => {
        this.onClose(this.claim)
      });
  }

  onClose(value: any) {
    this.dialogRef.close(value);
  }
 

}
