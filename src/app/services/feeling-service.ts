import { Injectable } from '@angular/core';

// Den här service filen används för att visa emojis inne journal-list, 
// journal-history och statistic-page
@Injectable({
  providedIn: 'root'
})
export class FeelingService {
  private emojis: Record<string, string> = {
    // Skapar emojis: samma som enum klass Feeling i backenden
    // Emojis har jag bara i frontened, i databas sparas bara en sträng
    GLAD: '😊',
    SAD: '😢',
    ANGRY: '😡',
    TIRED: '😴',
    EXCITED: '😃',
    WORRIED: '😟',
    NEUTRAL: '😐',
    DISAPPOINTED: '😞',
    NERVOUS: '😬',
    STRESSED: '😫',
    RELIEVED: '😌',
    PROUD: '😎',
    HOPEFUL: '🤞'
  };

  // Tar in feeling & returnerar respektiv emoji
  // Om det inte finns i listan, returnerar ?
  getEmoji(feeling: any): string {
    return this.emojis[feeling] || '❓';
  }
  
}
