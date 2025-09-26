import { Component } from '@angular/core';
import { JournalForm } from '../../components/journal-form/journal-form';
import { JournalList } from '../../components/journal-list/journal-list';

@Component({
  selector: 'app-journal-page',
  imports: [JournalForm, JournalList],
  templateUrl: './journal-page.html',
  styleUrl: './journal-page.css'
})
export class JournalPage {

}
