import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { CoupleIntro } from './components/couple-intro/couple-intro';
import { VedicPrayer } from './components/vedic-prayer/vedic-prayer';
import { WeddingDetails } from './components/wedding-details/wedding-details';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    CoupleIntro,
    VedicPrayer,
    WeddingDetails,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'menyatukan-hati';
}
