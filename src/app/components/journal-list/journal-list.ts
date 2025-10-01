import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JournalEntry, JournlService } from '../../services/journl-service';
import { FeelingService } from '../../services/feeling-service';

@Component({
  selector: 'app-journal-list',
  imports: [CommonModule],
  templateUrl: './journal-list.html',
  styleUrl: './journal-list.css'
})
export class JournalList implements OnInit {

  entries : JournalEntry[] = [];
  loading = true;

  constructor(private journalService: JournlService, private feelingService: FeelingService) { }

  ngOnInit() {
    this.loadTodayEntries();
  }

  // Metod för att ladda dagens anteckningar
  loadTodayEntries() {
    this.journalService.getTodayEntries().subscribe({
      next: (data) => {
        this.entries = data;
        this.loading = false;
        console.log("Loaded today's journal entries", data);
      },
      error: (error) => {
        console.error("Error loading today's journal entries", error);
        this.loading = false;
      }
    });

  }
  // Emojis
  getEmoji(feeling: any){
    return this.feelingService.getEmoji(feeling);
  }
    
}
