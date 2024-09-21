import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Inscription} from "../components/interfaces/inscription";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = 'http://127.0.0.1:5000/inscription'; // Replace with your API endpoint
  constructor(private http: HttpClient) { }

  putInscription(inscription: Inscription): Observable<any[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    return this.http.post<any[]>(this.apiUrl, inscription, options);
  }
}
