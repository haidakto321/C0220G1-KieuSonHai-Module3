import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer = new Customer();
  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      this.customerService.findById(id).subscribe(
        next => this.customer = next,
        error => console.log(error)
      );
    });
  }

}
