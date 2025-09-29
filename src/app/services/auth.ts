import { Injectable } from '@angular/core';

// Typ för svaret från backend vid inloggning/registrering, (AuthResponse i backend) 
export interface AuthResponse {
  message: string;
  token: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
}
