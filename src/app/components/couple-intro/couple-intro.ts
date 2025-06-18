import { Component } from '@angular/core';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-couple-intro',
  imports: [],
  templateUrl: './couple-intro.html',
  styleUrl: './couple-intro.css'
})
export class CoupleIntro {
  groomFullName = Env.groomFullName;
  brideFullName = Env.brideFullName;
}
