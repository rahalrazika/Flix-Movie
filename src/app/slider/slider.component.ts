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

  goToMovieDetail(movieId: number): void {
    this.router.navigate(['/movie-detail', movieId]);
  }

}
