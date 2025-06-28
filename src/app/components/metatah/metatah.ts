import { Component } from '@angular/core';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-metatah',
  imports: [],
  templateUrl: './metatah.html',
  styleUrl: './metatah.css'
})
export class Metatah {
  participants = Env.metatahParticipants;
}