import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Env } from '../../../environment/env';

@Component({
  selector: 'app-digital-envelope',
  imports: [CommonModule],
  templateUrl: './digital-envelope.html',
  styleUrl: './digital-envelope.css'
})
export class DigitalEnvelopeComponent {
  bankAccount = {
    groom: Env.bankAccountGroom,
    bride: Env.bankAccountBride
  }
  copySuccess = {
    groom: false,
    bride: false
  };

  async copyAccountNumber(type: 'groom' | 'bride') {
    let text = '';
    if (type == 'groom') {
      text = this.bankAccount.groom.accountNumber
    } else {
      text = this.bankAccount.bride.accountNumber
    }

    try {
      await navigator.clipboard.writeText(text);
      this.copySuccess[type] = true;
      setTimeout(() => {
        this.copySuccess[type] = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      this.fallbackCopyTextToClipboard(text, type);
    }
  }

  fallbackCopyTextToClipboard(text: string, type?: 'groom' | 'bride') {
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
      if (successful && type) {
        this.copySuccess[type] = true;
        setTimeout(() => {
          this.copySuccess[type] = false;
        }, 2000);
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
}
