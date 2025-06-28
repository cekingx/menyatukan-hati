import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { CoupleIntro } from './components/couple-intro/couple-intro';
import { VedicPrayer } from './components/vedic-prayer/vedic-prayer';
import { WeddingDetails } from './components/wedding-details/wedding-details';
import { PhotoGallery } from './components/photo-gallery/photo-gallery';
import { Footer } from './components/footer/footer';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    CoupleIntro,
    VedicPrayer,
    WeddingDetails,
    PhotoGallery,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'menyatukan-hati';
  private themeService = inject(ThemeService);

  constructor() {
    // Theme is already initialized in ThemeService constructor
  }
}
