import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../interfaces/picture.interface';

@Injectable({
  providedIn: 'root'
})
export class AstronomyService {




  pictureSelected!:Picture;
  picturesRandom:Picture[]=[];
  pictureDate!:Picture;

  apiKey:string='?api_key=FpIgY0iFIgo4bIRtpdXa3p7OLHKOn5UY0w0z3Kui';
  apiUrl:string = 'https://api.nasa.gov/planetary/apod';




/////////////////////////////////////////////////



  constructor( private http:HttpClient) { }



///////////////////////////////////////



  
  getPictureDay():Observable<Picture>{
    return this.http.get<Picture>(`${this.apiUrl}${this.apiKey}`)
  }


  setPictureRandom(){
    this.http.get<Picture[]>(`${this.apiUrl}${this.apiKey}&count=10`)
      .subscribe(data => {
        console.log(data);
        // TODO error
        this.picturesRandom = data });
  }

  setPictureByDate(fecha:string){
    this.http.get<Picture[]>(`${this.apiUrl}${this.apiKey}&start_date=${fecha}&end_date=${fecha}`)
      .subscribe(info=> {
        this.pictureDate = info[0];
      })

  }

}
