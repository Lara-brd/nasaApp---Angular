import { Component } from '@angular/core';
import { AstronomyService } from '../../services/astronomy.service';

// urlvideo
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  videoUrl:string = '';
  genuineVideoUrl!:SafeResourceUrl;


  constructor(  private _astronomyService:AstronomyService,
                private _sanitizer:DomSanitizer) {
    this.videoUrl = this._astronomyService.videoUrl;
    this.genuineVideoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this._astronomyService.videoUrl = '';

  }

}
