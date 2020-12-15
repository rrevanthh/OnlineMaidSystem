import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { mustmatch } from '../helper/mustmatch.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  rolesList =["Admin",'Maid','Member','Guest'];
  maidType =['Cleaner','Cook','Housekeeping','Servent'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: mustmatch('password', 'confirmPassword')
  });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    

  // convenience getter for easy access to form fields
    // get f()
    //  { 
    // return this.registerForm.controls;
    //  }  

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
