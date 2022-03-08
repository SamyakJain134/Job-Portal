import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addUser } from 'src/app/models/usermodel';
import { SignupuserService } from 'src/app/services/signupuser.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
register:any=FormGroup;
user:addUser;//addUser hai model uska object banaya hai kya user
  constructor(private fb:FormBuilder, 
    private router:Router, 
    private signupservice:SignupuserService,
    ) {
  
   }

  ngOnInit(): void {
    this.register=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,
        Validators.minLength(8)])],
      phone:['',Validators.required],
      type:['',Validators.required]
    })
  }
  registerSubmit(){
    this.user=this.register.value;
    this.signupservice.addUser(this.user).subscribe((resp) =>{
      console.log(resp);
    })
    //console.log(data);
  }
  goToLogin(){
    this.router.navigate(['login'])
  }

}
