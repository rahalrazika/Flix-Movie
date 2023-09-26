import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    provideFirebaseApp (() => initializeApp(environment.firebaseConfig)),
    provideAuth( () => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
