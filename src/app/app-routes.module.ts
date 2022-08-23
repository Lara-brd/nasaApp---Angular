import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { BtnThemeComponent } from './shared/btn-theme/btn-theme.component';
import { HomeComponent } from './shared/home/home.component';


const routes:Routes =[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'nasa',
    loadChildren:()=>import('./nasa/nasa.module').then(m=>m.NasaModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'btnTheme',
    component:BtnThemeComponent
  },
  {
    path:'**',
    redirectTo:'main'
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
