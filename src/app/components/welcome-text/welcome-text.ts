import { Component } from '@angular/core';
import { RegisterBtn } from '../register-btn/register-btn';
import { LoginBtn } from '../login-btn/login-btn';
import { RegisterForm } from '../register-form/register-form';
import { LoginForm } from '../login-form/login-form';



@Component({
  selector: 'app-welcome-text',
  imports: [RegisterBtn, LoginBtn, RegisterForm, LoginForm],
  templateUrl: './welcome-text.html',
  styleUrl: './welcome-text.css'
})
export class WelcomeText {
  showRegister = false;
  showLogin = false;
}
