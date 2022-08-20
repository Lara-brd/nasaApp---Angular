import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutesModule } from './app-routes.module';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { ApodComponent } from './nasa/pages/apod/apod.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    ErrorPageComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
