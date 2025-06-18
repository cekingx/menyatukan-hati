import { Component } from '@angular/core';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  groomShortName = Env.groomShortName;
  brideShortName = Env.brideShortName;
}
