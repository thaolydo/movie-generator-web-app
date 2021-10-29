import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { ResetpasswordPageComponent } from './Pages/resetpassword-page/resetpassword-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ActorActressPageComponent } from './Pages/actor-actress-page/actor-actress-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ResetpasswordPageComponent,
    MainPageComponent,
    ActorActressPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(
      reducers
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
