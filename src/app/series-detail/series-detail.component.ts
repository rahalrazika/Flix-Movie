import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService as DetailsService } from '../services/detail.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent {
  series: any;
  seriesId!: number;

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.seriesId = +params['id'];

      this.detailService.getSeriesDetails(this.seriesId).subscribe(
        (data) => {
          this.series = data;
        },
        (error) => {
          console.error('Error fetching series details:', error);
        }
      );
    });
  }

}
