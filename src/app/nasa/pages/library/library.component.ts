import { Component, OnInit } from '@angular/core';
import { Picture } from '../../interfaces/picture.interface';
import { AstronomyService } from '../../services/astronomy.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

}
