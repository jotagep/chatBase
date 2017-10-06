import { Component, OnInit } from '@angular/core';

import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  message: string;

  constructor(
    private _chat: ChatService
  ) { }

  ngOnInit() {
  }

  send() {
    this._chat.sendMessage(this.message);
    // reset message
    this.message = '';
  }

  handleSubmit(event) {
    if ( event.keyCode === 13) {
      this.send();
    }
  }

}
