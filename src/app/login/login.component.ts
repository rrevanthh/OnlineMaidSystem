import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MemberdetailsService } from '../memberdetails.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from '../service/alert.service';

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
    private memberservice: MemberdetailsService,
    private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  }); 

  // get return url from route parameters or default to '/' loginForm.controls.
 // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    this.loading=true;
    this.memberservice.login(this.loginForm)
    .pipe(first()).subscribe(
      data =>{
      if (data.userName!=='')
      {
        this.router.navigate(['/']);
      }else
      {
        this.alertService.error("gfser");
        this.loading = false;
    }
  })
    

  }

}
