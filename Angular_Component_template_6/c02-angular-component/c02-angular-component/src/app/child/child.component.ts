import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  valueChildReceive: string;

  valueToParent = 'Hello parent';

  @Output()
  eventChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(): void {
    this.eventChild.emit(this.valueToParent);
  }
}
