import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { MaterialModule } from '../material/material.module';
import { BigImageComponent } from './components/big-image/big-image.component';
import { LibraryComponent } from './pages/library/library.component';
import { PictRandomComponent } from './pages/pict-random/pict-random.component';
import { CardComponent } from './components/card/card.component';
import { PictSelectedComponent } from './pages/pict-selected/pict-selected.component';
import { PictDayComponent } from './pages/pict-day/pict-day.component';
import { PictDateComponent } from './pages/pict-date/pict-date.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './components/video/video.component';
import { HomeApodComponent } from './pages/homeApod/homeApod.component';







@NgModule({
  declarations: [
    BigImageComponent,
    HomeApodComponent,
    LibraryComponent,
    PictRandomComponent,
    CardComponent,
    PictSelectedComponent,
    PictDayComponent,
    PictDateComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class NasaModule { }
