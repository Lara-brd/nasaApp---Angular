import { Component, OnDestroy, OnInit } from '@angular/core';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-pict-day',
  templateUrl: './pict-day.component.html',
  styles: [`

  `]
})
export class PictDayComponent implements OnInit, OnDestroy {

  constructor( private _astronomyService:AstronomyService) { }

  ngOnInit(): void {
    this._astronomyService.setPictureDay();
  }

  ngOnDestroy() {
    // this._astronomyService;
  }

}
