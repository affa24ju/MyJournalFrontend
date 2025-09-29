import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

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

  // Injecerar Auth service för registrering, och Router för navigering efter registrering
  constructor(private auth: Auth, private router: Router) {}

 
  closeForm() {
    console.log("Close register form");
    this.close.emit();
  }
  onSubmit() {
    console.log("Form submitted");
    // this.register.emit({username: this.username, password: this.password});
    // this.close.emit();
    this.auth.register(this.username, this.password).subscribe({
      next: (response) => {
        console.log("Registrering lyacades", response);
        this.close.emit();
        alert("Registrering lycades. Nu kan du logga in med ditt användarnamn och lösenord." );
        // Navigera till startsidan efter registrering
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error("Registration failed", error);
        alert("Registration failed: " + error.error.message);
      }
    });
  }
}
