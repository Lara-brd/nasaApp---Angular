import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasarRoutingModule } from './nasa-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NasarRoutingModule
  ]
})
export class NasaModule { }
