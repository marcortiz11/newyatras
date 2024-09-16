import { NgModule }      from '@angular/core';
// Components
import { BrowserModule } from '@angular/platform-browser';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { TripsSchedulledComponent } from './components/trips-schedulled/trips-schedulled.component';
import { RootComponent } from './root/root.component';
import { TripDescriptionComponent } from './components/trip-description/trip-description.component';
// Services
import { provideHttpClient } from '@angular/common/http';
// Extra
import { MatGridList, MatGridTile } from "@angular/material/grid-list";
import { AppRoutingModule } from './app-routing.module';
import { Trip } from './interfaces/trip';


@NgModule({
  declarations: [
    FrontPageComponent,
    TripsSchedulledComponent,
    RootComponent,
    TripDescriptionComponent
  ],
  imports: [
    BrowserModule,
    MatGridList,
    MatGridTile,
    AppRoutingModule
  ],
  exports: [
    FrontPageComponent,
    TripsSchedulledComponent,
    RootComponent,
    TripDescriptionComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [RootComponent]
})

export class AppModule { }
