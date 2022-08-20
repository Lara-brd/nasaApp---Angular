import { Component, OnInit } from '@angular/core';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-pict-date',
  templateUrl: './pict-date.component.html',
  styles: [`
    .wrapp{
      max-width:1200px;
    }
    .text-day{
      padding-top:20px;
      max-width:60%;
      
    }
  `]
})

export class PictDateComponent implements OnInit {


  get picture(){
    return this._AstronomyService.pictureDate
  }


  fecha!:Date;
  //TODO asegurarme que la fecha es la correcta
  minDate:Date = new Date(1995,5,16);
  maxDate:Date = new Date();

  fechaSended:boolean = false;



/////////////////////////////////////////////////////


  constructor( private _AstronomyService:AstronomyService) { }


  ////////////////////////////////////////////////



  ngOnInit(): void {
    

  }


  getData(){
    this.fechaSended = true;
    const data = this.formatDate();
    this._AstronomyService.setPictureByDate(data); 

  }

  prueba(){
    console.log(this.fecha)
  }


  formatDate(){
    return [
      this.fecha.getFullYear(),
      this.fecha.getMonth(),
      this.fecha.getDate(),
    ].join('-');
  }



}
