import { Component } from '@angular/core';
import { RegisterBtn } from '../register-btn/register-btn';

@Component({
  selector: 'app-welcome-text',
  imports: [RegisterBtn],
  templateUrl: './welcome-text.html',
  styleUrl: './welcome-text.css'
})
export class WelcomeText {

}
