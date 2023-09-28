import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeService } from './services/home.service';
import { MatListModule } from '@angular/material/list';
import { SliderComponent } from './pages/slider/slider.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { AllSeriesComponent } from './pages/all-series/all-series.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [AppComponent, RegistrationComponent, LoginComponent, HomeComponent, NavbarComponent, FooterComponent, SliderComponent, PaginationComponent, AllMoviesComponent, AllSeriesComponent, MovieDetailComponent, SeriesDetailComponent, SearchComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
