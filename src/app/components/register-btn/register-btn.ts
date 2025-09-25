import { Component } from '@angular/core';

@Component({
  selector: 'app-register-btn',
  imports: [],
  templateUrl: './register-btn.html',
  styleUrl: './register-btn.css'
})
export class RegisterBtn {

  getRegister() {
    console.log("Register button clicked");
  }

}
