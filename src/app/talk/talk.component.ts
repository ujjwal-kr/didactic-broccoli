import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Chat } from '../models/Chat';
import { User2 } from '../models/User2';

import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.sass']
})
export class TalkComponent implements OnInit, OnDestroy {
  chats: Chat[];
  user2Online: boolean;
  messageForm: FormGroup;
  el: any;
  input: any;
  lastSeen: any;

  constructor(private chatService: ChatService,
    private statusService: StatusService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    window.onbeforeunload = () => {
      this.statusService.offlineUser1();
      this.statusService.deactivateUser();
    }
    this.el = document.getElementById("lol");
    this.input = document.getElementById("input");
    this.statusService.activateUser();
    if (!this.statusService.isActive) this.router.navigate(['/'], { queryParams: { id: 'wiki' } });
    this.statusService.onlineUser1();
    this.messageForm = this.fb.group({
      message: ['', [
        Validators.required,
      ]]
    })
    this.getChats();
    this.el.scrollIntoView();
    this.getUser2();
  }

  getChats() {
    this.chatService.getChats().subscribe(chats => {
      this.chats = chats;
      this.el.scrollIntoView();
    })
  }

  get message() {
    return this.messageForm.get('message').value;
  }

  postMessage() {
    if(this.message.length < 1 || this.message == " ") return false
    const chat: Chat = {
      date: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'she',
      uni: 'uni',
      message: this.message
    }

    this.chatService.postChat(chat);
    this.el.scrollIntoView();
    this.input.focus();
    this.messageForm.reset();
  }

  deactivate() {
    this.statusService.deactivateUser();
    this.ngOnInit();
  }

  getUser2() {
    this.statusService.user2IsOnline().subscribe( (user: User2) => {
      this.user2Online = user.isOnline;
      this.lastSeen = moment(user.lastSeen).fromNow()
    })
  }

  delete() {
    this.chatService.deleteChats();
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.statusService.offlineUser1();
    this.statusService.deactivateUser();
  }

}
