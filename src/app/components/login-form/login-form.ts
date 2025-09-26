import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  username = '';
  password = '';

  closeForm() {
    console.log("Close login form");
  }
  onSubmit() {
    console.log("Login form submitted");
  }

}
