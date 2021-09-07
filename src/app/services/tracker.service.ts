import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private dataService: DataService) { }
  cityId = 6167865;
  forecastDays = 5;

  getWeatherData(): Observable<any> {
    return this.dataService.get(`forecast?id=${this.cityId}&units=metric`, {});
  }

}
