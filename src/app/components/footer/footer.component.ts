import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/modals/contact';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Contacts:Contact[];
   contact: Contact = new Contact();

  constructor(private contactservice:ContactService,
    private userService: UserService,
 
    private router: Router) { }

  ngOnInit() {
  }


  createrecontact():void {
    this.contactservice.addContact(this.contact)
    .subscribe( data => {
      this.userService.toastMessage("message envoyer")
     },(error) => {
      this.userService.toastMessage("failed action")
  }
  );
}

}
