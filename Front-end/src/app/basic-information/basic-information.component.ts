import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  model = new Student('','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
