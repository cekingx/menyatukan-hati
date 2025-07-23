import { Component } from '@angular/core';
import { Env } from '../../../environment/env';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-metatah',
  imports: [],
  templateUrl: './metatah.html',
  styleUrl: './metatah.css'
})
export class Metatah {
  participants = Env.metatahParticipants;

  constructor(private assetService: AssetService) {}

  getImageUrl(path: string): string {
    return this.assetService.getImageUrl(path);
  }
}