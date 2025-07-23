import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Env } from '../../../environment/env';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-metatah-gallery',
  imports: [CommonModule],
  templateUrl: './metatah-gallery.html',
  styleUrl: './metatah-gallery.css'
})
export class MetatahGallery implements OnInit, OnDestroy {
  photos = Env.metatahGalleryPhotos;
  selectedPhoto: string | null = null;
  isLightboxOpen = false;
  currentPhotoIndex = 0;

  constructor(private assetService: AssetService) {}

  getImageUrl(path: string): string {
    return this.assetService.getImageUrl(path);
  }

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  openLightbox(photo: string, index: number): void {
    this.selectedPhoto = photo;
    this.currentPhotoIndex = index;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedPhoto = null;
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage(): void {
    if (this.photos.length === 0) return;
    
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentPhotoIndex];
  }

  previousImage(): void {
    if (this.photos.length === 0) return;
    
    this.currentPhotoIndex = this.currentPhotoIndex === 0 ? this.photos.length - 1 : this.currentPhotoIndex - 1;
    this.selectedPhoto = this.photos[this.currentPhotoIndex];
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (!this.isLightboxOpen) return;
    
    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.previousImage();
        break;
    }
  }
}