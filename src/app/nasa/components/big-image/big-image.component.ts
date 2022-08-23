import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AstronomyService } from '../../services/astronomy.service';


@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent implements OnInit {

  get picture(){
    return this._astronomyService.picture;
  }

  @Input() buttonText:string ='';
  @Input() link:string ='';


  constructor(  private _astronomyService:AstronomyService,
                private _router:Router) {
  }
  
  ngOnInit(): void {  
  }

  onGo(){
    this._router.navigate([`${this.link}`]);
  }

}
