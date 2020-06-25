import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
customer: Customer;
  editForm: FormGroup;
  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      cmnd: ['', [Validators.required, Validators.pattern('^([0-9]{1}[0-9]{8})|([0-9]{1}[0-9]{11})$')]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      idCustomer: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.findById(id).subscribe(
      next => {
        this.customer = next;
        this.editForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }
  onSubmit() {
    this.customerService.editById(this.editForm.value).subscribe(
      // next => window.location.reload(),
      error => console.log(error)
    );
  }
}
