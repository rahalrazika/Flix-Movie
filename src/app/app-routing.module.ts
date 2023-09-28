import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegistrationComponent } from './registration/registration.component'; 
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

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
