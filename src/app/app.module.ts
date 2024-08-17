import { NgModule }      from '@angular/core';
// Components
import { BrowserModule } from '@angular/platform-browser';
import { FrontPageComponent } from './front-page/front-page.component';
import { TripsSchedulledComponent } from './trips-schedulled/trips-schedulled.component';
import { RootComponent } from './root/root.component';
import { TripDescriptionComponent } from './trip-description/trip-description.component';
// Services
import { provideHttpClient } from '@angular/common/http';
// Extra
import { MatGridList, MatGridTile } from "@angular/material/grid-list";
import { AppRoutingModule } from './app-routing.module';


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
