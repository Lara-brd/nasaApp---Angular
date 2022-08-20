import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasaApp';

  @HostBinding('class')componentCssClass:any;

  constructor( public overlayContainer:OverlayContainer){}


  public onSetTheme(e:string){
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }

}
