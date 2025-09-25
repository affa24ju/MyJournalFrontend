import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {

  @Output() close = new EventEmitter<void>();

  closeForm() {
    console.log("Close register form");
    this.close.emit();
  }

}
