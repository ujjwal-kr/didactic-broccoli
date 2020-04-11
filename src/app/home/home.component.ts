import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { ChatService } from '../services/chat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
id: any;
  constructor(
    private statusService: StatusService,
    private chatservice: ChatService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      if(params.id == 'wiki') return window.open('https://en.wikipedia.org/wiki/Wormhole', '_self')
      else return this.ngOnInit();
    })
  }

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

  select() {
    this.router.navigate(['/select']);
  }

}
