import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JournalEntryRequest, JournlService } from '../../services/journl-service';

@Component({
  selector: 'app-journal-form',
  imports: [FormsModule],
  templateUrl: './journal-form.html',
  styleUrl: './journal-form.css'
})
export class JournalForm {
  note = '';
  feeling = 'GLAD'; // Default value

  constructor(private journalService: JournlService) { }

  onSubmit() {
    console.log("Journal form submitted");

    if (this.note.trim() === '') {
      alert("Anteckningen är tom - skriv något!");
      console.log("Empty note - not submitting");      
      return;
    }
    // Skapar ett request-objekt med journaldata
    const request: JournalEntryRequest = {
      note: this.note,
      feeling: this.feeling
    };
    // Anropar JournlService för att spara journalposten
    this.journalService.createEntry(request).subscribe({
      next: (entry) => {
        console.log("Journal entry created", entry);
        alert("Din anteckning är sparad!");
        // Rensar formuläret efter lyckad inlämning
        this.note = '';
        this.feeling = 'GLAD';
        
      },
      error: (error) => {
        console.error("Error creating journal entry", error);
        alert("Fel vid sparande av anteckning: " + error.error.message);
      }
    });
  }

}
