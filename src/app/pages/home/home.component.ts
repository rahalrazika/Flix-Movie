import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: any[] = [];
  tvSeries: any[] = [];
  allMovies: any[] = [];
  allSeries: any[] = [];
  currentPage = 1;
  totalPages: number = 0;
  moviesPerPage = 10;
  popularMovies: any[] = [];
  activeTab: 'movies' | 'series' = 'movies';
  currentSeriesPage = 1;
  totalSeriesPages = 0;


  constructor(private homeService: MovieService, private router: Router ) { }


  ngOnInit(): void {
    this.homeService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
    });

    this.homeService.getPopularTVSeries().subscribe((data) => {
      this.tvSeries = data.results;
      console.log(this.tvSeries);

    });

    this.loadMovies();
    this.loadTopMovies();

  }

  loadTopMovies(): void {
    this.homeService.getAllMovies(this.currentPage).subscribe((data: any) => {
      this.allMovies = data.results;
      this.totalPages = Math.ceil(this.allMovies.length / this.moviesPerPage);
      this.allMovies.sort((a, b) => b.vote_average - a.vote_average);
      this.popularMovies = this.allMovies.slice(0, 5);
    });
  }

  loadMovies(): void {
    this.homeService.getAllMovies(this.currentPage).subscribe((data: any) => {
      this.allMovies = data.results;
      this.totalPages = Math.ceil(this.allMovies.length / this.moviesPerPage);
    });
  }

  loadSeries(): void {    
    this.homeService.getAllSeries(this.currentSeriesPage).subscribe((data: any) => {
      this.allSeries = data.results;
      this.totalSeriesPages = Math.ceil(this.allSeries.length / this.moviesPerPage);
    });
  }

  loadNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMovies();
    }
  }


  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
    }
  }
  selectTab(tab: 'movies' | 'series'): void {
    this.activeTab = tab;
    if (tab === 'series') {
      this.loadSeries();
    }
  }



  loadPreviousPageSeries(): void {
    if (this.currentSeriesPage > 1) {
      this.currentSeriesPage--;
      this.loadSeries();
    }
  }

  loadNextPageSeries(): void {
    if (this.currentSeriesPage < this.totalSeriesPages) {
      this.currentSeriesPage++;
      this.loadSeries();
    }
  }

  showMovieDetail(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }
  showSeriesDetail(seriesId: number) {
    this.router.navigate(['/series-detail', seriesId]);
  }
}
