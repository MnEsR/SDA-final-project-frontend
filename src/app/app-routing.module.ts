import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbonFootprintResultComponent } from './componnents/carbon-footprint-result/carbon-footprint-result.component';
import { CategoryEmissionComponent } from './componnents/category-emission/category-emission.component';
import { EnvironmentalActvityComponent } from './componnents/environmental-actvity/environmental-actvity.component';
import { HomeComponent } from './componnents/home/home.component';
import { LoginComponent } from './componnents/login/login.component';
import { SignupComponent } from './componnents/signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'carbon-footprint-result', component: CarbonFootprintResultComponent },
  { path: 'environmental-activity', component: EnvironmentalActvityComponent },
  { path: 'category-emission', component: CategoryEmissionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
