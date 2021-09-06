import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { DatePipe } from '@angular/common';
import { ShowMinPipe } from './pipes/show-min.pipe';
import { ShowMaxPipe } from './pipes/show-max.pipe';
import { ShowMeanPipe } from './pipes/show-mean.pipe';
import { ShowModePipe } from './pipes/show-mode.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMinPipe,
    ShowMaxPipe,
    ShowMeanPipe,
    ShowModePipe,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
