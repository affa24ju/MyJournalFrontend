import { Component } from '@angular/core';
import { JournlService } from '../../services/journl-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeelingService } from '../../services/feeling-service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, Legend, plugins } from 'chart.js';


@Component({
  selector: 'app-statistics-page',
  imports: [FormsModule, RouterLink, CommonModule, BaseChartDirective],
  templateUrl: './statistics-page.html',
  styleUrl: './statistics-page.css'
})
export class StatisticsPage {
  startDate: string | null = null;
  endDate: string | null = null;
  stats: any = null;

  //chart
  chartData: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      }
    ]
  };
  chartOptions: ChartConfiguration<'pie'> ['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };  

  constructor(private journalservice: JournlService, private feelingService: FeelingService) { }

  // Metod för att visa statistiken
  loadStats(){
    if (!this.startDate || !this.endDate) {
      alert('Välj både start- och slutdatum!');
      return;
    }

    this.journalservice.getStats(this.startDate, this.endDate).subscribe({
      next: (data) => {
        console.log('Statistik data:', data);      
        this.stats = data;

        // Till diagram
        const labels = Object.keys(data.feelingPercentages);
        const values = Object.values(data.feelingPercentages);

        // Genererar slumpmässigt färg
        const colors = labels.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`);

        this.chartData = {
          labels,
          datasets: [
            {
              data: values as number[],
              backgroundColor: colors
            }
          ]
        };
      },
      error: (err) => {
        console.error('Fel vid hämtning av statistik:', err);
        alert('Ett fel inträffade vid hämtning av statistik. Försök igen senare.');
      }
    });

  }

  // Formaterar procent 
  formatPercent(value: any) : string {
    return `${Math.round(value)}%`;
  }
  // Get emojis
  getEmoji(feeling: any) {
    return this.feelingService.getEmoji(feeling);
  }


}
