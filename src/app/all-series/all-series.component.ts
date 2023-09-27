import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
  styleUrls: ['./all-series.component.scss']
})
export class AllSeriesComponent {
  @Input() allSeries: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
}
