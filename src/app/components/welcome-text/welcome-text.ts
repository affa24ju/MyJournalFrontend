import { Component } from '@angular/core';
import { RegisterBtn } from '../register-btn/register-btn';
import { LoginBtn } from '../login-btn/login-btn';

@Component({
  selector: 'app-welcome-text',
  imports: [RegisterBtn, LoginBtn],
  templateUrl: './welcome-text.html',
  styleUrl: './welcome-text.css'
})
export class WelcomeText {

}
