import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ThemeName } from '../../models/theme.interface';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  template: `
    <div class="theme-switcher flex gap-2 p-4">
      <button 
        *ngFor="let theme of themes"
        (click)="setTheme(theme.name)"
        [class.active]="currentTheme() === theme.name"
        class="px-3 py-1 rounded-md border transition-colors"
        [class.bg-primary-500]="currentTheme() === theme.name"
        [class.text-white]="currentTheme() === theme.name"
        [class.border-primary-500]="currentTheme() === theme.name"
        [class.bg-white]="currentTheme() !== theme.name"
        [class.text-primary-700]="currentTheme() !== theme.name"
        [class.border-primary-300]="currentTheme() !== theme.name"
      >
        {{theme.displayName}}
      </button>
    </div>
  `,
  styleUrl: './theme-switcher.css'
})
export class ThemeSwitcher {
  private themeService = inject(ThemeService);
  
  readonly currentTheme = this.themeService.currentTheme;
  readonly themes = [
    { name: 'rose' as ThemeName, displayName: 'Rose' },
    { name: 'blue' as ThemeName, displayName: 'Blue' },
    { name: 'green' as ThemeName, displayName: 'Green' }
  ];

  setTheme(themeName: ThemeName): void {
    this.themeService.setTheme(themeName);
  }
}