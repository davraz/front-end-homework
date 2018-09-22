import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  model = new Student('','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private router: Router) { }

  onBack(): void {
    this.router.navigate(['/registration/video']);
  }

  ngOnInit() {
  }

}
