import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent {
  series: any;
  seriesId!: number;
  trailerVideoKey: string | undefined;


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.seriesId = +params['id'];

      this.movieService.getSeriesDetails(this.seriesId).subscribe(
        (data) => {
          this.series = data;
        },
        (error) => {
          console.error('Error fetching series details:', error);
        }
      );

      this.movieService.getSeriesVideos(this.seriesId).subscribe(
        (videosData) => {
          if (videosData.results && videosData.results.length > 0) {
            const trailerKey = videosData.results[0].key;
            if (trailerKey) {
              this.trailerVideoKey = trailerKey;
            }
          }
        },
        (error) => {
          console.error('Error fetching series videos:', error);
        }
      );
    });
  }

}
