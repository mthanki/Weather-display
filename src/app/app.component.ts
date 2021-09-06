import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TrackerService } from './services/tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'code-V1';

  today = new Date();
  day = 60 * 60 * 24 * 1000;

  dateWeather: any = {};

  dailyWeather = [];
  dailyWeather$ = new BehaviorSubject(this.dailyWeather);

  celing = 5;

  weatherData$: Observable<any> = this.tracker.getWeatherData();

  constructor(
    private tracker: TrackerService,
  ) {
    // create an object to store datewise data
    for (let i = 0; i <= this.celing; i++) {
      const date = new Date(this.today.getTime() + i * this.day);
      this.dateWeather[date.getDate()] = [];
    }

    this.weatherData$.subscribe(w => {
      const reports = w.list;
      for (const report of reports) {
        const reportDate = new Date(report.dt * 1000).getDate();
        this.dateWeather[reportDate].push(report);
      }

      // Remove everything except temps
      let i = 0;
      for (const day in this.dateWeather) {
        let date = new Date();
        this.dateWeather[day].temp = this.dateWeather[day].map(day => day.main.temp);
        this.dateWeather[day].date = date.setDate(this.today.getDate() + i);
        i++;

        // create new array with easily accessable structure
        this.dailyWeather.push({
          date: this.dateWeather[day].date,
          temps: this.dateWeather[day].temp,
        });
      }

      // remove today's data
      this.dailyWeather.shift();
      this.dailyWeather$.next(this.dailyWeather);
    });
  }

  ngOnInit(): void {
  }

  addTemp(temp, index): void {
    this.dailyWeather[index].temps.push(temp ?? 0);
    this.dailyWeather$.next(this.dailyWeather);
  }

  weatherByTemps(object) {
    return object?.temps[object?.temps?.length - 1];
  }
}
