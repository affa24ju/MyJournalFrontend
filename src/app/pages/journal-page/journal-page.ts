import { Component } from '@angular/core';
import { JournalForm } from '../../components/journal-form/journal-form';
import { JournalList } from '../../components/journal-list/journal-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-page',
  imports: [JournalForm, JournalList],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.css'
})
export class JournalPage {

  constructor(private router: Router) { }

  logOut() {
    // Rensar token från localStorage
    localStorage.removeItem('token');
    
    // Navigerar tillbaka till startsidan
    this.router.navigate(['/']);
  }

}
