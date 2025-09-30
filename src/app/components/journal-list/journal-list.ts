import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JournalEntry, JournlService } from '../../services/journl-service';

@Component({
  selector: 'app-journal-list',
  imports: [CommonModule],
  templateUrl: './journal-list.html',
  styleUrl: './journal-list.css'
})
export class JournalList implements OnInit {

  entries : JournalEntry[] = [];
  loading = true;

  constructor(private journalService: JournlService) { }

  ngOnInit() {
    this.loadTodayEntries();
  }

  // Metod för att ladda dagens anteckningar
  loadTodayEntries() {
    
  }
    


}
