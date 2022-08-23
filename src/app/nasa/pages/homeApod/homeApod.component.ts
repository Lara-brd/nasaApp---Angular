import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-homeApod',
  templateUrl: './homeApod.component.html',
  styles: [`
  .container{
    margin:10px;
  }
`]
})
export class HomeApodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}


}
