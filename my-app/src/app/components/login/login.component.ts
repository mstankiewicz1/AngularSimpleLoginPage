import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password:string;

  loginUser() {
    if(this.username === "admin" && this.password === "test") {
      console.log("Welcome");
    } else {
      console.log("Not Welcome");
    }
  }

}
