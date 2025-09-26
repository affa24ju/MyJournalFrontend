import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() close = new EventEmitter<void>();
  @Output() login = new EventEmitter<{username: string, password: string}>();

  closeForm() {
    console.log("Close login form");
    this.close.emit();
  }
  onSubmit() {
    console.log("Login form submitted");
    this.login.emit({username: this.username, password: this.password});
    this.close.emit();
  }

}
