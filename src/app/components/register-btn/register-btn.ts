import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-btn',
  imports: [],
  templateUrl: './register-btn.html',
  styleUrl: './register-btn.css'
})
export class RegisterBtn {

  @Output() openRegister = new EventEmitter<void>();

  showRegister() {
    console.log("Register button clicked");
    this.openRegister.emit();
  }
}
