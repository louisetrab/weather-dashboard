import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './views/overview/overview.component';
import { GaugeComponent } from './modules/gauge/gauge.component';
import { SearchComponent } from './modules/search/search.component';
import { InformationComponent } from './modules/information/information.component';
import { ForecastComponent } from './modules/forecast/forecast.component';
import { DetailsComponent } from './views/details/details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    GaugeComponent,
    SearchComponent,
    InformationComponent,
    ForecastComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    IgxRadialGaugeModule,
    AppRoutingModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}