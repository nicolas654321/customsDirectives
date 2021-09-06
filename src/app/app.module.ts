import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurvolDirective } from './survol.directive';
import { ShowMovieDirective } from './show-movie.directive';

@NgModule({
  declarations: [
    AppComponent,
    SurvolDirective,
    ShowMovieDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
