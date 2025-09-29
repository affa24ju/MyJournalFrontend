import { Routes } from '@angular/router';
import { WelcomeText } from './components/welcome-text/welcome-text';
import { JournalPage } from './pages/journal-page/journal-page';

export const routes: Routes = [
    { path: '', component: WelcomeText },
    { path: 'journal', component: JournalPage} 
];
