import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrontPageComponent } from './front-page/front-page.component';
import { TripsSchedulledComponent } from './trips-schedulled/trips-schedulled.component';
import { RootComponent } from './root/root.component';
import {MatGridList} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    FrontPageComponent,
    TripsSchedulledComponent,
    RootComponent
  ],
    imports: [
        BrowserModule,
        MatGridList
    ],
  exports: [
    FrontPageComponent,
    TripsSchedulledComponent,
    RootComponent
  ],
  bootstrap: [RootComponent]
})

export class AppModule { }
