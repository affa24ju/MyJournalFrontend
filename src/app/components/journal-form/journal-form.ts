import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal-form',
  imports: [FormsModule],
  templateUrl: './journal-form.html',
  styleUrl: './journal-form.css'
})
export class JournalForm {
  note = '';
  feeling = 'GLAD'; // Default value

  onSubmit() {
    console.log("Journal form submitted");
  }

}
