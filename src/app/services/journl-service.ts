import { Injectable } from '@angular/core';

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
  
}
