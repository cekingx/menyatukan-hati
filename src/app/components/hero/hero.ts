import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Env } from '../../../environment/env';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.guestName = params['guest'] ?? 'Guest';
    });
  }

  scrollToNextSection() {
    const element = document.getElementById('couple');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
