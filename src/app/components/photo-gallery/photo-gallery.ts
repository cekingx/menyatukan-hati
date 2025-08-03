import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/asset.service';
import { Env } from '../../../environment/env';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-photo-gallery',
  imports: [CommonModule],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.css'
})
export class PhotoGallery implements OnInit {
  images: GalleryImage[] = [];

  constructor(private assetService: AssetService) {}

  selectedImage: GalleryImage | null = null;
  isLightboxOpen = false;

  ngOnInit(): void {
    this.images = Env.galleryImages.map(image => ({
      id: image.id,
      src: this.assetService.getImageUrl(image.path),
      alt: image.alt,
    }));
    
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage(): void {
    if (!this.selectedImage) return;
    
    const currentIndex = this.images.findIndex(img => img.id === this.selectedImage!.id);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
  }

  previousImage(): void {
    if (!this.selectedImage) return;
    
    const currentIndex = this.images.findIndex(img => img.id === this.selectedImage!.id);
    const prevIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.selectedImage = this.images[prevIndex];
  }

  trackByImageId(index: number, image: GalleryImage): string {
    return image.id;
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
