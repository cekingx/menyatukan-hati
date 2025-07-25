import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Env } from '../../../environment/env';
import { AudioService } from '../../services/audio.service';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  groomShortName = Env.groomShortName;
  brideShortName = Env.brideShortName;
  guestName: string = 'Guest';
  isMusicPlaying = false;
  heroBackgroundImage!: string;

  constructor(private route: ActivatedRoute, private audioService: AudioService, private assetService: AssetService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.guestName = params['guest'] ?? 'Guest';
    });

    // Initialize asset URLs
    this.heroBackgroundImage = this.assetService.getImageUrl('/images/hero2.jpg');

    // Initialize audio service with the music file
    this.audioService.initAudio(this.assetService.getAudioUrl('/music/lets-fall-in-love.mp3'));
  }

  scrollToNextSection() {
    // Start music when user interacts (to comply with browser autoplay policies)
    this.startMusic();
    
    const element = document.getElementById('couple');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async startMusic() {
    try {
      await this.audioService.play();
      // Wait for event listeners to update state
      setTimeout(() => {
        this.isMusicPlaying = this.audioService.getIsPlaying();
      }, 10);
    } catch (error) {
      console.log('Could not start music:', error);
    }
  }

  async toggleMusic() {
    try {
      await this.audioService.toggle();
      // Wait for event listeners to update state
      setTimeout(() => {
        this.isMusicPlaying = this.audioService.getIsPlaying();
      }, 10);
    } catch (error) {
      console.log('Could not toggle music:', error);
    }
  }
}
