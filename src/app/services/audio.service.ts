import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private isInitialized = false;

  constructor() {}

  initAudio(audioSrc: string) {
    if (!this.isInitialized) {
      this.audio = new Audio(audioSrc);
      this.audio.loop = true;
      this.audio.volume = 0.5;
      this.isInitialized = true;

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
      });

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
      });
    }
  }

  async play(): Promise<void> {
    if (this.audio && !this.isPlaying) {
      try {
        await this.audio.play();
      } catch (error) {
        console.log('Audio autoplay blocked by browser:', error);
      }
    }
  }

  pause(): void {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
    }
  }

  async toggle(): Promise<void> {
    if (this.isPlaying) {
      this.pause();
    } else {
      await this.play();
    }
  }

  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }
}