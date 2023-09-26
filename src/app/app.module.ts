import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp (() => initializeApp(environment.firebaseConfig)),
    provideAuth( () => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
