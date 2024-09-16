import { Component, OnInit } from '@angular/core';
import { TripService } from '../../api/trip-service.service';
import { Trip } from '../../interfaces/trip';

@Component({
  selector: 'app-trips-schedulled',
  templateUrl: './trips-schedulled.component.html',
  styleUrl: './trips-schedulled.component.css',
  host: {
    class: 'w-full flex flex-col'
  }
})
export class TripsSchedulledComponent implements OnInit {

  private trips: Trip[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit(){
    this.fetchTrips()
  }

  fetchTrips(): void {
    this.tripService.getTrips().subscribe(
      (response: any) => {
        this.trips = response;
      },
      (error: any) => {
        console.log("Error");
      },
    );
  }

  getTrips(): Trip[] {
    return this.trips;
  }
}
