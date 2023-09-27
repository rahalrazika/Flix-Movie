import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;

  @Output() previousPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();

  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.previousPage.emit();
    }
  }

  loadNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.nextPage.emit();
    }
  }
}
