import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string;
  password: string;
  loginError: boolean;

  constructor() { }

  onSubmit(){
    console.log(`User: ${this.username}, Pass: ${this.password}`)
  }


}