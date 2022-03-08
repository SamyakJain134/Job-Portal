import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {}
  goToSignup(){
    this.router.navigate(['register']);
  }
  goToLogin(){
    this.router.navigate(['login'])
  }
}



