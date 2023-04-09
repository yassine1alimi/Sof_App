import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/modals/faq';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq-client',
  templateUrl: './faq-client.component.html',
  styleUrls: ['./faq-client.component.css']
})
export class FaqClientComponent implements OnInit {

  faq : Faq = new Faq();
 faqs : any;
  constructor(private faqService:FaqService) { }

  ngOnInit() {
    this.getFaqs();

  }
  getFaqs(){
    this.faqService.getAllFaq().subscribe(
      response => {
        this.faqs = response
      console.log(response)}
     );
     
  }
  
}
