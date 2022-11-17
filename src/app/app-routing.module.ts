import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindComponent } from './wind/wind.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WavesComponent } from './waves/waves.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'wind', component: WindComponent},
  {path: 'waves', component: WavesComponent},
  {path: 'weather', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
