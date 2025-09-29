import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

// Typ för svaret från backend vid inloggning/registrering, (AuthResponse i backend) 
export interface AuthResponse {
  message: string;
  token: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // Bas-URL för backend API
  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) { }

  // Metod för användarregistrering
  register(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { username, password })
    .pipe(tap(response => {
      // Spara token i localStorage vid lyckad registrering
      localStorage.setItem('token', response.token);
    }));
  }
}
