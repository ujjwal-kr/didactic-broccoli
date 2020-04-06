import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private statusService: StatusService,
    private chatservice: ChatService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteAll() {
    return this.chatservice.deleteChats();
  }

  deleteAllAndAlert() {
    this.deleteAll();
    this.statusService.alertUser1();
    alert('Something Went Wrong!')
  }

  verify() {
    return this.router.navigate(['/name']);
  }

}
