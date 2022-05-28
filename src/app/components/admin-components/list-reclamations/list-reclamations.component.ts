import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Observable } from 'rxjs';
import { FileDownloadService } from 'src/app/services/file-download.service';
import { saveAs } from 'file-saver';
import { ReclamationClient } from 'src/app/modals/reclamationClient';
import { ReclamationClientService } from 'src/app/services/reclamation-client.service';

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.css']
})
export class ListReclamationsComponent implements OnInit {

  
  
  listReclamations: ReclamationClient[];
  ReclamationClient: ReclamationClient = new ReclamationClient ; 
  
  
  constructor(  private reclamationClient :ReclamationClientService,
                private emailService: EmailService,
                private fileDownloadService :FileDownloadService) {}


  ngOnInit() {
    this.getlistReclamations();
  }

  onSendMessage(){
    this.emailService.sendEmail();
  }

  getlistReclamations(){
    this.reclamationClient.getReclamationClientsList().subscribe(
      response => {
        console.log("response",response);
        this.listReclamations = response; }
  );
}

downloadFile(fileName: any){
  
  this.fileDownloadService.downloadFile({'filename':fileName})
  .subscribe(data => {
    
    saveAs(new Blob([data],{type:"application/pdf"}),fileName);

  })

}

download(ReclamationClient :ReclamationClient){
 
  console.log("hello",this.ReclamationClient)
  this.reclamationClient.downloadFile(ReclamationClient.pj1)
  .subscribe( data =>  {
    alert ("file downloaded succeffully");
  })
}

deleteTodo(ReclamationClient:ReclamationClient): void {
  this.reclamationClient.deleteReclamationClient(ReclamationClient.idReclamation)
    .subscribe( data => {
      this.listReclamations = this.listReclamations.filter(u => u !== ReclamationClient);
    })
  
}

/*downloadFile(){
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '_File_Saved_Path');
  link.setAttribute('download', 'file_name.pdf');
  document.body.appendChild(link);
  link.click();
  link.remove();
  }*/
  
}