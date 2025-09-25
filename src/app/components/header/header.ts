import { Component } from '@angular/core';
import { WelcomeText } from '../../welcome-text/welcome-text';

@Component({
  selector: 'app-header',
  imports: [WelcomeText],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
