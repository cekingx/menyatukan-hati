import { Component } from '@angular/core';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-metatah-gallery',
  imports: [],
  templateUrl: './metatah-gallery.html',
  styleUrl: './metatah-gallery.css'
})
export class MetatahGallery {
  photos = Env.metatahGalleryPhotos;
}