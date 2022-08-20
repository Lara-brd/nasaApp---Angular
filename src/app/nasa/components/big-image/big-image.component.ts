import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../interfaces/picture.interface';


@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent implements OnInit {

  @Input() picture!:Picture;
  @Input() buttonText:string = '';
  @Input() link:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
