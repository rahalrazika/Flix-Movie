import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  movieId!: number;
  trailerVideoKey: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private homeService: MovieService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];

      this.homeService.getMovieDetails(this.movieId).subscribe(
        (data) => {
          this.movie = data;

          this.homeService.getMovieVideos(this.movieId).subscribe(
            (videosData) => {
              if (videosData.results && videosData.results.length > 0) {
                const trailerKey = videosData.results[0].key;
                if (trailerKey) {
                  this.trailerVideoKey = trailerKey;
                }
              }
            },
            (error) => {
              console.error('Error fetching movie videos:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching movie details:', error);
        }
      );
    });
  }
  goBack(): void {
    this.router.navigate(['/']);
  }

}
