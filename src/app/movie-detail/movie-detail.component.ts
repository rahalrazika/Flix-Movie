import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  movieId!: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];

      this.movieService.getMovieDetails(this.movieId).subscribe(
        (data) => {
          this.movie = data;
        },
        (error) => {
          console.error('Error fetching movie details:', error);
        }
      );
    });
  }

}
