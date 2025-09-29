import { Component } from '@angular/core';
import { JournalForm } from '../../components/journal-form/journal-form';
import { JournalList } from '../../components/journal-list/journal-list';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-journal-page',
  imports: [JournalForm, JournalList],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.css'
})
export class JournalPage {

  constructor(private router: Router, private auth: Auth) { }

  logOut() {
    // // Rensar token från localStorage
    // localStorage.removeItem('token');

    // Använder Auth service för att logga ut
    this.auth.logout();

    // Navigerar tillbaka till startsidan
    this.router.navigate(['/']);
  }

}
