import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibraryComponent } from './nasa/pages/library/library.component';
import { ApodComponent } from './nasa/pages/apod/apod.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRoutesModule } from './app-routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ApodComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
