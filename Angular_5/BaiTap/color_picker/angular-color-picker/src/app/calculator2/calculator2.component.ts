import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  output: number;
  error: string;
  first: number;
  second: number;
  operator: string;
  getStyle(second, operator) {
    let display = '';
    if (second === 0 && operator === '/') {
      display = 'none';
    } else {
      display = '';
    }
    return display;
  }
selectChange(value) {
    this.operator = value;
  }
calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        if (this.second === 0) {
         this.error = 'ads';
        } else{
          this.output = this.first / this.second;
        }
        break;
    }
  }

constructor() {
  }

ngOnInit(): void {
  }

}
