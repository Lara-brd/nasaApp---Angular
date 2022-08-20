import { Component, OnInit } from '@angular/core';
import { Picture } from '../../interfaces/picture.interface';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-pict-selected',
  templateUrl: './pict-selected.component.html',
  styleUrls: ['./pict-selected.component.scss']
})
export class PictSelectedComponent implements OnInit {

  pictureSelected!:Picture;

  constructor( private _astronomyService:AstronomyService) { }

  ngOnInit(): void {
    this.pictureSelected =  this._astronomyService.pictureSelected;
  }

}
