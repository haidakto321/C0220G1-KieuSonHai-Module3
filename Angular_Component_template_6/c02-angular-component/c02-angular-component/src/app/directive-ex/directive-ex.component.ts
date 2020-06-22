import { Component, OnInit } from '@angular/core';
import {IStudent} from '../istudent';

@Component({
  selector: 'app-directive-ex',
  templateUrl: './directive-ex.component.html',
  styleUrls: ['./directive-ex.component.css']
})
export class DirectiveExComponent implements OnInit {

  students: IStudent[] = [
    {id: 1, name: 'Tien'},
    {id: 2, name: 'Toan'},
    {id: 3, name: 'Thien'}
  ]

  showTableStudent = false;

  constructor() { }

  ngOnInit(): void {
  }

}
