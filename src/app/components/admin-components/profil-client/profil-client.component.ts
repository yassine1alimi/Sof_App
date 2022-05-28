import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationClient } from 'src/app/modals/reclamationClient';
import { ReclamationClientService } from 'src/app/services/reclamation-client.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {

  id: number ;
  reclamation : ReclamationClient = new ReclamationClient();
  constructor(private route: ActivatedRoute, private reclamationService : ReclamationClientService,
    private userService : UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getReclamation();
    
  }

  getReclamation() {
    console.log(this.id);
    this.reclamationService.getReclamationClient(this.id).subscribe(
      response => {
        this.reclamation = response ; }
    );
  }

  sendConfirmMsg(id) {
    this.reclamationService.sendConfirmMessage(id).subscribe(  (reclamation) => {
      this.userService.toastMessage("Email sent successffully")
    },(error) =>{
      this.userService.toastMessage("Email sent successffully")
    }
    );
    
  };

  

  sendDenyMsg(id) {
    this.reclamationService.sendDenyMessage(id)
    .subscribe( (reclamation) =>{
      this.userService.toastMessage("Email sent successffully")
    },(error) =>{
      this.userService.toastMessage("Email sent successffully")
    }
    );
   
  };

}
