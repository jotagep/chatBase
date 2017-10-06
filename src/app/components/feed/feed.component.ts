import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { ChatService } from './../../services/chat.service';
import { ChatMessage } from './../../models/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(
    private _chat: ChatService
  ) { }

  ngOnInit() {
    this.feed = this._chat.getMessages();
  }

  ngOnChanges() {
    this.feed = this._chat.getMessages();
  }

}
