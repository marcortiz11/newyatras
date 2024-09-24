import { NgModule }      from '@angular/core';
// Components
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { TripsSchedulledComponent } from './components/trips-schedulled/trips-schedulled.component';
import { TripDescriptionComponent } from './components/trip-description/trip-description.component';
import { TripInscriptionFormComponent } from './components/trip-inscription-form/trip-inscription-form.component';
// Services
import { provideHttpClient } from '@angular/common/http';
// Extra
import { MatGridList, MatGridTile } from "@angular/material/grid-list";
import { AppRoutingModule } from './app-routing.module';
import {MatIcon} from "@angular/material/icon";


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
        AppRoutingModule,
        TripInscriptionFormComponent,
        MatIcon
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
