import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApodComponent } from './pages/apod/apod.component';
import { LibraryComponent } from './pages/library/library.component';

const routes:Routes =[
  {
    path:'',
    component:HomeComponent,
    children:[
      { path:'apod', component: ApodComponent },
      { path:'library', component:LibraryComponent},
      { path:'**', redirectTo:'home'}
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
