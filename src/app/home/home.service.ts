
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    private apiKey = '803840059151aa540ac3a18d256f6792';
    private baseUrl = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    getPopularMovies(): Observable<any> {
        const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
        return this.http.get(url);
    }

    getPopularTVSeries(): Observable<any> {
        const url = `${this.baseUrl}/tv/popular?api_key=${this.apiKey}`;
        return this.http.get(url);
    }

    getAllMovies(page: number): Observable<any> {
        const params = new HttpParams().set('api_key', this.apiKey).set('page', page.toString());

        return this.http.get(`${this.baseUrl}/discover/movie`, { params });
    }
    
    getAllSeries(page: number): Observable<any> {
        const params = new HttpParams().set('api_key', this.apiKey).set('page', page.toString());

        return this.http.get(`${this.baseUrl}/discover/tv`, { params });
    }
}

