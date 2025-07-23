import { Component, OnInit } from '@angular/core';
import { Env } from '../../../environment/env';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-couple-intro',
  imports: [],
  templateUrl: './couple-intro.html',
  styleUrl: './couple-intro.css'
})
export class CoupleIntro implements OnInit {
  groomFullName = Env.groomFullName;
  groomFatherName = Env.groomFatherName;
  groomMotherName = Env.groomMotherName;
  brideFullName = Env.brideFullName;
  brideFatherName = Env.brideFatherName;
  brideMotherName = Env.brideMotherName;
  groomImage!: string;
  brideImage!: string;

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    this.groomImage = this.assetService.getImageUrl('/images/groom-cropped.jpg');
    this.brideImage = this.assetService.getImageUrl('/images/bride-cropped.jpg');
  }
}
