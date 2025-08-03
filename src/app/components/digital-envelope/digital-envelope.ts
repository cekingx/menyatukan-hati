import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-envelope',
  imports: [CommonModule],
  templateUrl: './digital-envelope.html',
  styleUrl: './digital-envelope.css'
})
export class DigitalEnvelopeComponent {
  bankName = 'BCA';
  accountNumber = '4160591426';
  accountName = 'Anak Agung Gde Wahyu Spa';
  copySuccess = false;

  async copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(this.accountNumber);
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      this.fallbackCopyTextToClipboard(this.accountNumber);
    }
  }

  fallbackCopyTextToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.copySuccess = true;
        setTimeout(() => {
          this.copySuccess = false;
        }, 2000);
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
}