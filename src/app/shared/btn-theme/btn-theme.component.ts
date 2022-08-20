import { Component, OnInit, HostBinding  } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-btn-theme',
  templateUrl: './btn-theme.component.html',
  styleUrls: ['./btn-theme.component.scss']
})
export class BtnThemeComponent implements OnInit {


  constructor(public overlayContainer:OverlayContainer) { }

  ngOnInit(): void {
  }


}










