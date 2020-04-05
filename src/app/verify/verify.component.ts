import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.sass']
})
export class VerifyComponent implements OnInit {

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.statusService.verifyUser();
    console.log(this.statusService.isVerified, this.statusService.isActive);

  }

}
