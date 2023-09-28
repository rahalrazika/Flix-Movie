import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent {
  @Input() allMovies: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  constructor(private router: Router) { }

  showMovieDetail(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }
}
