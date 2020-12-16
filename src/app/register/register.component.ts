import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { mustmatch } from '../helper/mustmatch.validation';
import { MemberdetailsService } from '../memberdetails.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedRole="";
  submitted = false;
  registerForm: FormGroup;
  rolesList =["Admin",'Maid','Member','Guest'];
  maidType =['Cleaner','Cook','Housekeeping','Servent'];
  isMaid = false;
  

  constructor(private formBuilder: FormBuilder,private memberservice: MemberdetailsService) { }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      role: ['',Validators.required],
      maidType: ['',Validators.required],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required, ],
      mobile: ['', [Validators.required,Validators.pattern('[0-9]{10}')] ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: mustmatch('password', 'confirmPassword')
  });
  }

  
  onOptionsSelected(selectedValue:String){
    if(selectedValue =="Maid")
    {
      this.isMaid = true;
    }else{
      this.isMaid = false;
    }

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
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.memberservice.register(this.registerForm.value).subscribe(
      data => console.log(data) 
    , error => console.log(error));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
