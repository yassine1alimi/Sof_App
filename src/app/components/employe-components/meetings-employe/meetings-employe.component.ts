import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/modals/meeting';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-meetings-employe',
  templateUrl: './meetings-employe.component.html',
  styleUrls: ['./meetings-employe.component.css']
})
export class MeetingsEmployeComponent implements OnInit {

  
  meeting : Meeting = new Meeting();
  meetings:Meeting[];

  constructor(private meetingService:MeetingService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.meetingService.getAllmeetings()
    .subscribe(
      response => {
        this.meetings = response; }
     );
  }

}
