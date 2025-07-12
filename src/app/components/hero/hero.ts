import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Env } from '../../../environment/env';
import { AudioService } from '../../services/audio.service';

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

  constructor(private route: ActivatedRoute, private audioService: AudioService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.guestName = params['guest'] ?? 'Guest';
    });

    // Initialize audio service with the music file
    this.audioService.initAudio('/assets/music/morning-hapiness.mp3');
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
