import { Component, OnInit, ElementRef } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { Contact } from '../modals/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  contact : Contact = new Contact() ;
  contacts : any;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,private contactservice:ContactService,private elementRef: ElementRef) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    this.getcontacts();
  }
  getcontacts(){
    this.contactservice.getAllContact().subscribe(
      response => {
        this.contacts = response
      console.log("contact", response)}
     );
     
  }
  logout() {
    this.tokenStorageService.signOut();
    
    this.router.navigate(['/home']);
  }
  showMessage(id:any){
    console.log("id msg", id);
    const element = this.elementRef.nativeElement.querySelector('#message_content_'+id);
    element.classList.toggle('show');
  }

}
