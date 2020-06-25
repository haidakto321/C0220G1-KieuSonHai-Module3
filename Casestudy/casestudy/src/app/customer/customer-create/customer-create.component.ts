import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {log} from 'util';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      cmnd: ['', [Validators.required, Validators.pattern('^([0-9]{1}[0-9]{8})|([0-9]{1}[0-9]{11})$')]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      idCustomer: ['']
    });

    // update form state
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
  onSubmit() {
    this.registerForm.patchValue({
      idCustomer: 'KH-' + Math.round(Math.random() * 10000)
    });
    console.log(this.registerForm.value.idCustomer);
    this.customerService.create(this.registerForm.value).subscribe(
      // next => window.location.reload(),
      error => console.log(error)
    );
  }
}
