import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import { RegistrationComponent } from './pages/registration/registration.component'; 
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'series-detail/:id', component: SeriesDetailComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
