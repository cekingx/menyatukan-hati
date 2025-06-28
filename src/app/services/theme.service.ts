import { Injectable } from '@angular/core';
import { ThemeEnum } from '../enum/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.applyTheme(ThemeEnum.SAGE);
  }

  private applyTheme(theme: ThemeEnum): void {
    if (typeof document === 'undefined') {
      return; // SSR safety
    }

    // Remove any existing theme classes
    document.body.classList.remove(
      ThemeEnum.BLUE,
      ThemeEnum.SAGE,
      ThemeEnum.NAVY,
      ThemeEnum.WARM
    );

    if (theme != ThemeEnum.ROSE) {
      try {
        document.body.classList.add(theme);
      } catch (error) {
        console.log(`Error setting theme: ${theme}`);
      }
    } 
  }

  public setTheme(theme: ThemeEnum): void {
    this.applyTheme(theme);
  }
}