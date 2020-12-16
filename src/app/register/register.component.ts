import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { mustmatch } from '../helper/mustmatch.validation';
import { AlertService } from '../service/alert.service'; 
import { UserdetailsService } from '../service/userdetails.service';

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
  loading = false;
  
  constructor(private formBuilder: FormBuilder,
    private UserdetailsService: UserdetailsService,
    private router: Router,
    private alertService: AlertService,
    ) { }

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

  get f()
  { 
    return this.registerForm.controls;
  } 

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }    
    this.loading = true;
    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.UserdetailsService.register(this.registerForm.value).pipe(first())
    .subscribe(
      data =>{ console.log(data);
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
       }
    , error =>{ console.log(error);
      this.alertService.error(error);
      this.loading = false;
    });
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}
