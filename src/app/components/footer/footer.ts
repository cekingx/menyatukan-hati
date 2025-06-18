import { Component } from '@angular/core';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  groomShortName = Env.groomShortName;
  brideShortName = Env.brideShortName;
}
