import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiUrl = 'http://127.0.0.1:5000/trip'; // Replace with your API endpoint
  constructor(private http: HttpClient) { }

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTrip(trip_id: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/' + trip_id);
  }
}
