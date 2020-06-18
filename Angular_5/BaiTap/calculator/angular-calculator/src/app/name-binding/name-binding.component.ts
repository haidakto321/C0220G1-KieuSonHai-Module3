import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-binding',
  templateUrl: './name-binding.component.html',
  styleUrls: ['./name-binding.component.css']
})
export class NameBindingComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit(): void {
  }
showEvent(event) {
    this.name = event.target.value;
}
}
