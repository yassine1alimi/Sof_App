import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/modals/faq';
import { Router } from '@angular/router';
import { FaqService } from 'src/app/services/faq.service';
@Component({
  selector: 'app-update-faq',
  templateUrl: './update-faq.component.html',
  styleUrls: ['./update-faq.component.css']
})
export class UpdateFaqComponent implements OnInit {

  private faq: Faq ;

  constructor(private faqService:FaqService,private router:Router) { }

  ngOnInit() {
    this.faq = this.faqService.getter();
  }

  processForm(){
      
    this.faqService.updateFaq(this.faq).subscribe((faq)=> {
      console.log(faq);
      this.router.navigate(['/notesFaqs']);
    },(error)=>{
      console.log(error);
    });
 }

}
