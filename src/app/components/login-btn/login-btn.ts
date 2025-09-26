import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-btn',
  imports: [],
  templateUrl: './login-btn.html',
  styleUrl: './login-btn.css'
})
export class LoginBtn {

  @Output() openLogin = new EventEmitter<void>();

  showLogin() {
    console.log("Login button clicked");
    this.openLogin.emit();
  }

}
