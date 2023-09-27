import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent {
  @Input() allMovies: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
}
