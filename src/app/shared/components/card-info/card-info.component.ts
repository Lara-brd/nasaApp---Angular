import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface ContentCard {
  title:string;
  subtitle?:string;
  longText:string;
  btn:string;
  link:string;
}

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styles: [
  ]
})
export class CardInfoComponent implements OnInit {

  @Input() contentCard:any;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  onGo(){
    this.router.navigate([this.contentCard.link])
  }

}
