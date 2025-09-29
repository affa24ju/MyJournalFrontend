import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';


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
  // @Output() login = new EventEmitter<{username: string, password: string}>();

  // Injecerara Router för navigering efter inloggning, & auth service för inloggning
  constructor(private router: Router, private auth: Auth) {}

  closeForm() {
    console.log("Close login form");
    this.close.emit();
  }
  onSubmit() {
    // console.log("Login form submitted", this.username, this.password);
    // // Skicka inloggningsdata till föräldrakomponenten
    // this.login.emit({username: this.username, password: this.password});
    // this.close.emit();

    // // Navigera till journal-sidan efter inloggning
    // this.router.navigate(['/journal']);

    // Anropar backend för inloggning via Auth service
    this.auth.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log("Inloggning lyckades", response);
        this.close.emit();
        // Sparar token i localStorage
        localStorage.setItem('token', response.token);
        // Navigera till journal-sidan efter inloggning
        this.router.navigate(['/journal']);
      },
      error: (error) => {
        console.error("Inloggning misslyckades", error);
        alert("Inloggning misslyckades: " + error.error.message);
      }
    });
  }
}
