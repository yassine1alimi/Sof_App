import { Component, OnInit } from '@angular/core';
import { ChatMessageDto } from 'src/app/modals/ChatMessageDto';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user:string = 'user'
  constructor(public webSocketService: SocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }


  sendMessage(sendForm){
    const chatMessageDto = new ChatMessageDto(this.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }

}
