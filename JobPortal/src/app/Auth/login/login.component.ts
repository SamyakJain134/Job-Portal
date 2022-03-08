import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup
  
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.login=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,
        Validators.minLength(8)])]
    })
  }
  loginSubmit(data:any)
  {
    console.log(data);
  }
  goToSignup(){
    this.router.navigate(['register']);
  }

}
