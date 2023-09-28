import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import { RegistrationComponent } from './pages/registration/registration.component'; 
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'series-detail/:id', component: SeriesDetailComponent },
  { path: 'search', component: SearchComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
