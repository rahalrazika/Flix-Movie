import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  constructor(private service: MovieService, private title: Title, private meta: Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({ name: 'description', content: 'search here movies like avatar,war etc' });
  }



  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    this.service.getSearchResults(this.searchForm.value).subscribe(
      ([movieResults, seriesResults]) => {
        const movies = movieResults.results;
        const series = seriesResults.results;
        this.searchResult = [...movies, ...series];
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
  

}
