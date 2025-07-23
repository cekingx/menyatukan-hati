import { Injectable } from '@angular/core';
import { Env } from '../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private readonly baseUrl = Env.assetUrl;

  getImageUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }

  getAudioUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }
}