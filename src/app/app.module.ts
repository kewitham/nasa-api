import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsteroidComponent } from './asteroid/asteroid.component';
import { SpaceWeatherComponent } from './space-weather/space-weather.component';
import { NasaImageComponent } from './nasa-image/nasa-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidComponent,
    SpaceWeatherComponent,
    NasaImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
