import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from '../../interfaces/picture.interface';
import { AstronomyService } from '../../services/astronomy.service';


@Component({
  selector: 'app-pict-random',
  templateUrl: './pict-random.component.html',
  styleUrls: ['./pict-random.component.scss']
})
export class PictRandomComponent implements OnInit {
  
  get pictures(){
    return this._astronomyService.picturesRandom;
  }

  constructor(  private _astronomyService:AstronomyService,
                private router:Router ) { }

  ngOnInit(): void {
    if(this._astronomyService.picturesRandom.length === 0){
      this._astronomyService.setPictureRandom();
    }
  }

  getPicture(pict:Picture){
    this._astronomyService.pictureSelected = pict;
    console.log(this._astronomyService.pictureSelected);
    this.router.navigate(['/nasa/pictSelected'])
  }

  resetPictures(){
    this._astronomyService.picturesRandom = [];
    this._astronomyService.setPictureRandom();
  }

}
