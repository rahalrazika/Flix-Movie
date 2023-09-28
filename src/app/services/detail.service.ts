import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '803840059151aa540ac3a18d256f6792'; 
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  getSeriesDetails(seriesId: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${seriesId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
