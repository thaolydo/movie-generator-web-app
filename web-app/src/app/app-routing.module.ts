import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componenets/header/header.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ShareMoviePageComponent } from './Pages/share-movie-page/share-movie-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';

const routes: Routes = [
  {path: "landing-page", component: LandingPageComponent},
  {path: "login-page", component: LoginPageComponent},
  {path: "signup-page", component: SignupPageComponent},
  {path: "share-movie-page", component: ShareMoviePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
