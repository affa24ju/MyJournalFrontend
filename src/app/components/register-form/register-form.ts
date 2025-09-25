import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  username = '';
  password = '';

  @Output() close = new EventEmitter<void>();
  @Output() register = new EventEmitter<{username: string, password: string}>();

  @Input() 

  closeForm() {
    console.log("Close register form");
    this.close.emit();
  }
  onSubmit() {
    console.log("Form submitted");
    this.register.emit({username: this.username, password: this.password});
    this.close.emit();
  }
}
