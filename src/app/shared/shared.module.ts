import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    CardInfoComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class SharedModule { }
