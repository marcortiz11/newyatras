import { NgModule }      from '@angular/core';
// Components
import { BrowserModule } from '@angular/platform-browser';
import { FrontPageComponent } from './front-page/front-page.component';
import { TripsSchedulledComponent } from './trips-schedulled/trips-schedulled.component';
import { RootComponent } from './root/root.component';
// Services
import { provideHttpClient } from '@angular/common/http';
// Extra
import { MatGridList, MatGridTile } from "@angular/material/grid-list";


@NgModule({
  declarations: [
    FrontPageComponent,
    TripsSchedulledComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    MatGridList,
    MatGridTile
  ],
  exports: [
    FrontPageComponent,
    TripsSchedulledComponent,
    RootComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [RootComponent]
})

export class AppModule { }
