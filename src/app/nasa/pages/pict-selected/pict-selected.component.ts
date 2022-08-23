import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-pict-selected',
  templateUrl: './pict-selected.component.html',
  styleUrls: ['./pict-selected.component.scss']
})
export class PictSelectedComponent implements OnInit {


  get picture(){
    return this._astronomyService.picture;
  }

  link:string = "/nasa/pictRandom";

  isVideo:boolean = false;

  constructor(  private _astronomyService:AstronomyService,
                private _router:Router) { }

  ngOnInit(): void {

  }



}
