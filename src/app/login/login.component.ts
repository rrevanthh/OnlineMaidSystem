import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../service/alert.service';
import { UserdetailsService } from '../service/userdetails.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;  

  constructor(private formBuilder: FormBuilder,
    private router: Router, private alertService: AlertService,
    private route: ActivatedRoute,
    private authenticationService :AuthenticationService) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  }); 

  // get return url from route parameters or default to '/' loginForm.controls.
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    this.loading=true;
    this.authenticationService.login(this.loginForm)
    .pipe(first()).subscribe(
      data =>{
        this.router.navigate([this.returnUrl]);
    },
    error => {
        this.alertService.error(error);
        this.loading = false;
    })
    

  }

}
