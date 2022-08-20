import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApodComponent } from './pages/apod/apod.component';


import { LibraryComponent } from './pages/library/library.component';
import { PictRandomComponent } from './pages/pict-random/pict-random.component';
import { PictSelectedComponent } from './pages/pict-selected/pict-selected.component';
import { PictDayComponent } from './pages/pict-day/pict-day.component';
import { PictDateComponent } from './pages/pict-date/pict-date.component';

const routes:Routes =[
  {
    path:'',
    component:HomeComponent,
    children:[
      { path:'apod', component: ApodComponent },
      { path:'pictRandom', component:PictRandomComponent},
      { path:'pictDay', component:PictDayComponent},
      { path:'pictSelected', component:PictSelectedComponent},
      { path:'pictDate', component:PictDateComponent},
      { path:'library', component:LibraryComponent },
      { path:'**', redirectTo:'library'}
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class NasaRoutingModule { }
