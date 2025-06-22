import { Injectable, signal, computed, effect } from '@angular/core';
import { Theme, ThemeName } from '../models/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themes: Record<ThemeName, Theme> = {
    rose: { name: 'Rose', cssClass: 'theme-rose' },
    blue: { name: 'Blue', cssClass: 'theme-blue' },
    green: { name: 'Green', cssClass: 'theme-green' }
  };

  private readonly STORAGE_KEY = 'wedding-theme';
  private readonly SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)';

  // Angular Signals for reactive state management
  private readonly _currentTheme = signal<ThemeName>(this.getInitialTheme());
  private readonly _systemTheme = signal<'light' | 'dark'>(
    typeof window !== 'undefined' && window.matchMedia?.(this.SYSTEM_THEME_QUERY).matches ? 'dark' : 'light'
  );

  // Public readonly signals
  readonly currentTheme = this._currentTheme.asReadonly();
  readonly systemTheme = this._systemTheme.asReadonly();
  readonly currentThemeData = computed(() => this.themes[this._currentTheme()]);

  constructor() {
    // Effect to apply theme changes automatically
    effect(() => {
      this.applyTheme(this._currentTheme());
    });

    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia(this.SYSTEM_THEME_QUERY);
      mediaQuery.addEventListener('change', (e) => {
        this._systemTheme.set(e.matches ? 'dark' : 'light');
      });
    }
  }

  getCurrentTheme(): ThemeName {
    return this._currentTheme();
  }

  getTheme(themeName: ThemeName): Theme {
    return this.themes[themeName];
  }

  getAllThemes(): Theme[] {
    return Object.values(this.themes);
  }

  setTheme(themeName: ThemeName): void {
    if (!this.themes[themeName]) {
      console.error(`Theme '${themeName}' not found`);
      return;
    }
    
    this._currentTheme.set(themeName);
    this.saveThemeToStorage(themeName);
  }

  private getInitialTheme(): ThemeName {
    // Try to get theme from localStorage first
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY) as ThemeName;
      if (savedTheme && this.themes[savedTheme]) {
        return savedTheme;
      }
    }
    
    // Default to rose theme
    return 'blue';
  }

  private saveThemeToStorage(themeName: ThemeName): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(this.STORAGE_KEY, themeName);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }

  private applyTheme(themeName: ThemeName): void {
    const theme = this.themes[themeName];
    if (!theme) {
      console.error(`Theme '${themeName}' not found`);
      return;
    }

    if (typeof document === 'undefined') {
      return; // SSR safety
    }

    const body = document.body;
    
    try {
      // Remove all existing theme classes
      Object.values(this.themes).forEach(t => {
        body.classList.remove(t.cssClass);
      });
      
      // Apply new theme class (only if not default rose theme)
      if (themeName !== 'rose') {
        body.classList.add(theme.cssClass);
      }
      
      console.log(`Theme '${themeName}' applied successfully`);
    } catch (error) {
      console.error(`Error applying theme '${themeName}':`, error);
    }
  }
}