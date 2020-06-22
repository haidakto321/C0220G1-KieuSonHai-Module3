import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  templateUrl: './pipe-ex.component.html',
  styleUrls: ['./pipe-ex.component.css']
})
export class PipeExComponent implements OnInit {
  name = 'thanh tien';
  valueHiddenColor = true;

  constructor() { }

  ngOnInit(): void {
  }

  hiddenColor(): void {
    this.valueHiddenColor = !this.valueHiddenColor;
  }
}
