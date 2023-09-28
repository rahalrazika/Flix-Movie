import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() movies: any[] = [];
  constructor(private router: Router) { }

  goToDetail(item: any): void {
    if (item.isMovie) {
      this.router.navigate(['/movie-detail', item.id]);
    } else {
      this.router.navigate(['/series-detail', item.id]);
    }
  }
}
