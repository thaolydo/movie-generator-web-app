import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SettingsPageComponent } from './Pages/settings-page/settings-page.component';
import { ShareMoviePageComponent } from './Pages/share-movie-page/share-movie-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { ResetpasswordPageComponent } from './Pages/resetpassword-page/resetpassword-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ActorActressPageComponent } from './Pages/actor-actress-page/actor-actress-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'resetpassword-page', component: ResetpasswordPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'actor-actress-page', component: ActorActressPageComponent },
  { path: 'settings-page', component: SettingsPageComponent },
  { path: 'share-movie-page', component: ShareMoviePageComponent },
  {path:'search-page', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
