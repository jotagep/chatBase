import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../services/auth.service';

import { ChatMessage } from './../../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  ownEmail: string;
  isOwnMessage: boolean;

  constructor(
    private _auth: AuthService
  ) {
    _auth.authUser().subscribe( user => {
      this.ownEmail = user.email;
      this.isOwnMessage = (this.userEmail === this.ownEmail);
    });
   }

   ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.username;
  }

}
