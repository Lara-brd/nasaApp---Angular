import { Component, OnInit } from '@angular/core';


interface ContentCard {
  title:string;
  subtitle?:string;
  longText:string;
  btn:string;
  link:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})


export class HomeComponent implements OnInit {

  contentCard:ContentCard = {
    title:'Picture of the day',
    subtitle:'Astronomy',
    longText:'Sinze June 16 1995 NASA publish every day a picture whith interesting explanations. If you like it you can search a certain date or consult random pictures.',
    btn:'SEE PICTURES',
    link:'/nasa/pictDay'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
