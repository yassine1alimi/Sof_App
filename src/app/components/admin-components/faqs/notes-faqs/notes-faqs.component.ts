import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'; 
import { AjoutFaqComponent } from '../ajout-faq/ajout-faq.component';
import { FaqService } from 'src/app/services/faq.service';
import { Faq } from 'src/app/modals/faq';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-faqs',
  templateUrl: './notes-faqs.component.html',
  styleUrls: ['./notes-faqs.component.css']
})
export class NotesFaqsComponent implements OnInit {

  isPopupOpened = true;
  faq : Faq = new Faq();
  faqs:Faq[];
  constructor(private dialog: MatDialog, private faqService:FaqService,
    private router:Router) { }

  ngOnInit() {
    this.refreshData();
  }

  
  onAddNote() {
    this.openNoteDialog(null)
   }
 
   openNoteDialog(data?: any){
     const dialogRef = this.dialog.open(AjoutFaqComponent, {
       disableClose: false,
       autoFocus : true ,
       width : "65%",
       data: data
     } );
 
     dialogRef.afterClosed().subscribe(result => {
       if(result && data == null){
         this.faqs.push(result);
       }
       
       // this.refreshData();
     });
   }
  

  refreshData(){
    this.faqService.getAllFaq()
    .subscribe(
      response => {
        this.faqs = response; }
     );
  }

  deleteNote(faq:Faq): void {
    this.faqService.deleteFaqById(faq.id)
      .subscribe( data => {
        this.faqs = this.faqs.filter(u => u !== faq);
      })
    
  }

  updateUser(faq){  
    this.faqService.setter(faq);
    this.router.navigate(['/updateFaq']);

  }

  


}
