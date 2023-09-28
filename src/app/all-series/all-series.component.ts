import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
  styleUrls: ['./all-series.component.scss']
})
export class AllSeriesComponent {
  @Input() allSeries: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  constructor(private router: Router) { }

  showSeriesDetail(seriesId: number) {
    this.router.navigate(['/series-detail', seriesId]);
  }
}
