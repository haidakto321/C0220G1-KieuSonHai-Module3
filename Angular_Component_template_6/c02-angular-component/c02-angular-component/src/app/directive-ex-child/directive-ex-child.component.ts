import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-directive-ex-child',
  templateUrl: './directive-ex-child.component.html',
  styleUrls: ['./directive-ex-child.component.css']
})
export class DirectiveExChildComponent implements OnInit {

  @Input()
  id: number;
  @Input()
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
