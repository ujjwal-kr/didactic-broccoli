import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.sass']
})
export class TalkComponent implements OnInit, OnDestroy {

  constructor(private statusService: StatusService, private router: Router) { }
  
  ngOnInit(): void {
    this.statusService.onlineUser1();
    this.statusService.activateUser();
    console.log(this.statusService.isVerified, this.statusService.isActive);
    // if (!this.statusService.isActive) this.router.navigate(['/']);
  }

  deactivate() {
    this.statusService.deactivateUser();
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    this.statusService.offineUser1();
  }

}
