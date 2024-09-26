import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../../api/trip-service.service';
import { Trip } from '../../interfaces/trip';
import { Chart } from 'chart.js/auto';



@Component({
  selector: 'app-trip-description',
  templateUrl: './trip-description.component.html',
  styleUrls: ['./trip-description.component.css']
})
export class TripDescriptionComponent implements OnInit {
  public trip: Trip = {
    id: 0,
    name: '',
    country: '',
    description: '',
    start_date: '',
    end_date: '',
    price: 0,
    age_range: '',
    num_people: 0
  };
  public charts: Array<any> = [];

  constructor(private route: ActivatedRoute, private tripService: TripService) {}

  public ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => {
      this.fetchTrip(params['name'])
    });
    this.createChart();
  }

  private fetchTrip(tripId: string): void {
    this.tripService.getTrip(1).subscribe(
      (response: any) => {
        this.trip = response;
      },
      (error: any) => {
        console.log("Error");
      },
    );
  }

  public createChart(): void {
    this.charts = [
      new Chart("nature-donut", {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [60, 40],
            backgroundColor: ['green', 'gray'],
            hoverOffset: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Nature and outdoor'
            }
          }
        }
      }),
      new Chart("relax-donut", {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [30, 70],
            backgroundColor: ['blue', 'gray'],
            hoverOffset: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Relax'
            }
          }
        }
      }),
      new Chart("history-donut", {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [30, 70],
            backgroundColor: ['yellow', 'gray'],
            hoverOffset: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'History and Monuments'
            }
          }
        }
      }),
      new Chart("culture-donut", {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [50, 50],
            backgroundColor: ['orange', 'gray'],
            hoverOffset: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'City and Culture'
            }
          }
        }
      }),
      new Chart("nightlife-donut", {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [20, 80],
            backgroundColor: ['purple', 'gray'],
            hoverOffset: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Nightlife'
            }
          }
        }
      }),
    ]
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
