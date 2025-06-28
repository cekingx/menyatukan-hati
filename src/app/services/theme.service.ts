import { Injectable } from '@angular/core';
import { ThemeEnum } from '../enum/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.applyTheme(ThemeEnum.ROSE);
  }

  private applyTheme(theme: ThemeEnum): void {
    if (typeof document === 'undefined') {
      return; // SSR safety
    }

    if (theme != ThemeEnum.ROSE) {
      try {
        document.body.classList.add(theme)
      } catch (error) {
        console.log(`Error setting theme: ${theme}`)
      }
    } 
  }
}