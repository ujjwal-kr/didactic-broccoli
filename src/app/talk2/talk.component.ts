import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk2',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.sass']
})
export class TalkComponent2 implements OnInit {

  constructor(private statusService: StatusService, private router: Router) { }
  
  ngOnInit(): void {
    this.statusService.activateUser();
    console.log(this.statusService.isVerified, this.statusService.isActive);
    if (!this.statusService.isActive) this.router.navigate(['/']);
  }

  deactivate() {
    this.statusService.deactivateUser();
    this.ngOnInit();
  }

}
