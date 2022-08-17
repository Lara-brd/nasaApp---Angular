import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes =[
  {
    path:'nasa',
    loadChildren:()=>import('./nasa/nasa.module').then(m=>m.NasaModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
