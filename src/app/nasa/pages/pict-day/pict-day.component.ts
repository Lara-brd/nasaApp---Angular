import { Component, OnInit } from '@angular/core';
import { Picture } from '../../interfaces/picture.interface';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-pict-day',
  templateUrl: './pict-day.component.html',
  styles: [`

  `]
})
export class PictDayComponent implements OnInit {

  picture!:Picture;

  constructor( private _astronomyService:AstronomyService) { }

  ngOnInit(): void {
    this._astronomyService.getPictureDay()
      .subscribe(data => {
        this.picture = data;
      })
  }

}
