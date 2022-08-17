import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { NasaRoutingModule } from './nasa-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    MaterialModule

  ]
})
export class NasaModule { }
