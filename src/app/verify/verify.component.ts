import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.sass']
})
export class VerifyComponent implements OnInit {
verifyForm: FormGroup;
id: string;
  constructor(private statusService: StatusService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { 
      this.route.params.subscribe(params => {
        this.id = params.id;
      })
    }
  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      name : ''
    });

  }

  get name() {
    return this.verifyForm.get('name').value;
  }

  postName() {
    if (this.name == 'girly') {
      this.statusService.verifyUser();
      return this.router.navigateByUrl('/main' + this.id);
    } 
    return alert('Something went wrong!');
  }

}
