import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeelingService {
  private emojis: Record<string, string> = {
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

  getEmoji(feeling: string): string {
    return this.emojis[feeling] || '❓';
  }
  
}
