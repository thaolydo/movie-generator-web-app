import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ActorActressPageComponent } from './Pages/actor-actress-page/actor-actress-page.component';

const routes: Routes = [
  {path: "landing-page", component: LandingPageComponent},
  {path: "login-page", component: LoginPageComponent},
  {path: "signup-page", component: SignupPageComponent},
  {path: "main-page", component: MainPageComponent},
  {path: "actor-actress-page", component: ActorActressPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
