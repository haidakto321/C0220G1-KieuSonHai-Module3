import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user = {
    name: 'Tien',
    dateOfBirth: '2k'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log('Form ' + form.value.name);
    console.log('Object ' + this.user.name);
  }
}
