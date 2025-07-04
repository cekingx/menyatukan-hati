import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-wedding-details',
  imports: [CommonModule],
  templateUrl: './wedding-details.html',
  styleUrl: './wedding-details.css'
})
export class WeddingDetails implements OnInit, OnDestroy {
  groomFamName = Env.groomFamName;
  brideFamName = Env.brideFamName;
  weddingDate = new Date('2025-08-15 15:00:00');
  timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  private subscription?: Subscription;

  ngOnInit() {
    this.updateCountdown();
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const weddingTime = this.weddingDate.getTime();
    const difference = weddingTime - now;

    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }
}
