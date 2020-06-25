import { Component, OnInit } from '@angular/core';
import {CustomerService} from './customer.service';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[];
  constructor(private customerService: CustomerService) {
    // for (let i = 1; i <= 100; i++) {
    //   this.customerList.push(`customer ${i}`);
    // }
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(
      next => {this.customerList = next;
                },
      error => {
        this.customerList = [];
        console.log(error);
      }
    );
  }
}
