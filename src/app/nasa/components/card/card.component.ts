import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../interfaces/picture.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() picture!:Picture;

  constructor() { }

  ngOnInit(): void {
  }

}
