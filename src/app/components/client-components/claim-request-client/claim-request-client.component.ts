import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/modals/claim';
import { ClaimService } from 'src/app/services/claim.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-claim-request-client',
  templateUrl: './claim-request-client.component.html',
  styleUrls: ['./claim-request-client.component.css']
})
export class ClaimRequestClientComponent implements OnInit {

  claim: Claim = new Claim();
  id : number;
  constructor( private claimService:ClaimService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) {
    
  }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
  }

  createDemandeClaim():void {
    this.claimService.createDemandeClaim(this.claim,this.id)
    .subscribe( data => {
      this.userService.toastMessage("Claim created successfully")
     },(error) => {
      this.userService.toastMessage("failed action")
  }
  );
}

}
