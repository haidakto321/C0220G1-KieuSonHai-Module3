import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  selected = 0;
  hovered = 0;
  readonly = false;

  constructor() { }

  ngOnInit(): void {
  }

}
