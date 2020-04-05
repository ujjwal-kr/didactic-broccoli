import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Chat } from '../models/Chat';
import { User2 } from '../models/User2';

import * as firebase from 'firebase';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.sass']
})
export class TalkComponent implements OnInit, OnDestroy {
  chats: Chat[];
  user2Online: boolean;
  messageForm: FormGroup;

  constructor(private chatService: ChatService,
    private statusService: StatusService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.statusService.onlineUser1();
    this.statusService.activateUser();
    if (!this.statusService.isActive) this.router.navigate(['/']);
    this.messageForm = this.fb.group({
      message: ['', [
        Validators.required,
      ]]
    })
    this.getChats();
    this.getUser2();
  }

  getChats() {
    this.chatService.getChats().subscribe(chats => {
      this.chats = chats;
    })
  }

  get message() {
    return this.messageForm.get('message').value;
  }

  postMessage() {
    const chat: Chat = {
      date: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'she',
      uni: 'uni',
      message: this.message
    }

    this.chatService.postChat(chat);
  }

  deactivate() {
    this.statusService.deactivateUser();
    this.ngOnInit();
  }

  getUser2() {
    this.statusService.user2IsOnline().subscribe( (user: User2) => {
      this.user2Online = user.isOnline;
    })
  }

  delete() {
    this.chatService.deleteChats();
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    this.statusService.offineUser1();
  }

}
