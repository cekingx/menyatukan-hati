import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/asset.service';

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
    this.images = [
      {
        id: '1',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0626.jpg'),
        alt: 'Wedding Photo 1',
        caption: 'Together in love'
      },
      {
        id: '2',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0561.jpg'),
        alt: 'Wedding Photo 2',
        caption: 'Sacred ceremony moments'
      },
      {
        id: '3',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0632.jpg'),
        alt: 'Wedding Photo 3',
        caption: 'Traditional blessings'
      },
      {
        id: '4',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0640.jpg'),
        alt: 'Wedding Photo 4',
        caption: 'Family joy'
      },
      {
        id: '5',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0643.jpg'),
        alt: 'Wedding Photo 5',
        caption: 'Sacred vows'
      },
      {
        id: '6',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0650.jpg'),
        alt: 'Wedding Photo 6',
        caption: 'Eternal bond'
      },
      {
        id: '7',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0665.jpg'),
        alt: 'Wedding Photo 7',
        caption: 'Wedding celebration'
      },
      {
        id: '8',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0670.jpg'),
        alt: 'Wedding Photo 8',
        caption: 'Loving moments'
      },
      {
        id: '9',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0674.jpg'),
        alt: 'Wedding Photo 9',
        caption: 'Divine ceremony'
      },
      {
        id: '10',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0688.jpg'),
        alt: 'Wedding Photo 10',
        caption: 'Sacred rituals'
      },
      {
        id: '11',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0693.jpg'),
        alt: 'Wedding Photo 11',
        caption: 'Blessed union'
      },
      {
        id: '12',
        src: this.assetService.getImageUrl('/images/gallery/DSC_0697.jpg'),
        alt: 'Wedding Photo 12',
        caption: 'Wedding bliss'
      }
    ];
    
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
