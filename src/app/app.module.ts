import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherComponent } from './weather/weather.component';
// import { ProductsComponent } from './products/products.component';
// import { StatisticsComponent } from './statistics/statistics.component';
// import { CoupensComponent } from './coupens/coupens.component';
// import { PagesComponent } from './pages/pages.component';
// import { MediaComponent } from './media/media.component';
// import { SettingsComponent } from './settings/settings.component';
import { DatePipe } from '@angular/common';
import { WavesComponent } from './waves/waves.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    DashboardComponent,
    WeatherComponent,
    WavesComponent,
    // ProductsComponent,
    // StatisticsComponent,
    // CoupensComponent,
    // PagesComponent,
    // MediaComponent,
    // SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
