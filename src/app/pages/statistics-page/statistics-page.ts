import { Component } from '@angular/core';
import { JournlService } from '../../services/journl-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics-page',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './statistics-page.html',
  styleUrl: './statistics-page.css'
})
export class StatisticsPage {
  startDate = '';
  endDate = '';
  stats: any = null;

  constructor(private journalservice: JournlService) { }

  loadStats(){
    if (!this.startDate || !this.endDate) {
      alert('Välj både start- och slutdatum!');
      return;
    }

    this.journalservice.getStats(this.startDate, this.endDate).subscribe({
      next: (data) => {
        console.log('Statistik data:', data);      
        this.stats = data;
      },
      error: (err) => {
        console.error('Fel vid hämtning av statistik:', err);
        alert('Ett fel inträffade vid hämtning av statistik. Försök igen senare.');
      }
    });

  }

}
