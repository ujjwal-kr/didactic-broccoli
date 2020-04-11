import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Chat } from '../models/Chat';
import { User2 } from '../models/User2';

import * as firebase from 'firebase';

@Component({
  selector: 'app-talk2',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.sass']
})
export class TalkComponent2 implements OnInit, OnDestroy {
chats: Chat[];
user1Online: boolean;
messageForm: FormGroup;
el: any;

  constructor(private statusService: StatusService,
    private chatService: ChatService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    window.onbeforeunload = () => {
      this.statusService.offineUser2();
    }
    this.statusService.activateUser();
    this.el = document.getElementById("lol");
    this.statusService.onlineUser2();
    if (!this.statusService.isActive) this.router.navigate(['/']);
    this.messageForm = this.fb.group({
      message: ['', [
        Validators.required,
      ]]
    })
    this.getUser1();
    this.getChats();
    this.el.scrollIntoView();
  }

  deactivate() {
    this.statusService.deactivateUser();
    this.ngOnInit();
  }

  get message() {
    return this.messageForm.get('message').value;
  }

  postMessage() {
    const chat: Chat = {
      date: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'he',
      uni: 'uni',
      message: this.message
    }

    this.chatService.postChat(chat);
    this.messageForm.reset();
    this.el.scrollIntoView();
  }

  getUser1() {
    this.statusService.user1IsOnline().subscribe( (user: User2) => {
      this.user1Online = user.isOnline;
      console.log(this.user1Online);
    })
  }

  getChats() {
    this.chatService.getChats().subscribe(data => {
      this.chats = data;
      this.el.scrollIntoView();
    })
  }

  delete() {
    this.chatService.deleteChats();
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.statusService.offineUser2();
    this.statusService.deactivateUser();
  }

}
