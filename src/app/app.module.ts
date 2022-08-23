import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutesModule } from './app-routes.module';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { ApodComponent } from './nasa/pages/apod/apod.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { BtnThemeComponent } from './shared/btn-theme/btn-theme.component';


import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    ErrorPageComponent,
    BtnThemeComponent,

  ],
  imports: [
    AppRoutesModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
