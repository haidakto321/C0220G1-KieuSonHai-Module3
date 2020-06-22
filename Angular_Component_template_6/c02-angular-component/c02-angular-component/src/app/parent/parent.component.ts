import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  valueToChild = 'Hello child!';
  valueParentReceived: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveValueFromChild(value: string): void {
    this.valueParentReceived = value;
  }

}
