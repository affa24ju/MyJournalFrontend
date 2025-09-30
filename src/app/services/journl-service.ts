import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface för att ta emot Journal entries, motsvarar JournalEntryRequest dto i backend
export interface JournalEntryRequest {
  note: string;
  feeling: string;
}
// Interface för att spara entries i backend med id och createdAt
export interface JournalEntry {
  id: string;
  note: string;
  feeling: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class JournlService {
  // Bas-URL för backend API
  private apiUrl = 'http://localhost:8080/api/myJournal'; 

  constructor(private http: HttpClient) { }

  // Metod för att skapa en ny journal entry
  createEntry(request: JournalEntryRequest): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(`${this.apiUrl}/createJournalEntry`, request);

  }
  
}
