import { Component } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: any[] = [];
  tvSeries: any[] = [];
  allMovies: any[] = [];
  currentPage = 1;
  totalPages: number = 0;
  moviesPerPage = 10;

  constructor(private homeService: HomeService) { }


  ngOnInit(): void {
    this.homeService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
    });

    this.homeService.getPopularTVSeries().subscribe((data) => {
      this.tvSeries = data.results;
    });

    this.loadMovies();
  }

  loadMovies(): void {
    this.homeService.getAllMovies(this.currentPage).subscribe((data: any) => {
      this.allMovies = data.results;
      this.totalPages = Math.ceil(this.allMovies.length / this.moviesPerPage);
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
}
