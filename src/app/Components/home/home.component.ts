import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/Services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cityName?: string;
  constructor(private weatherService: WeatherService) { }

  weatherData: any;

  ngOnInit(): void {
    this.weatherService.getWeatherByIP()
      .subscribe((response) => {
        console.log(response.city);
        this.cityName = response.city;
        this.getWeatherData(this.cityName);
      })



    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     console.log(position);
    //   });
    // } else {
    //   console.log("User not allow")

    // }
  }


  change(event: any) {
    this.cityName = event.target.value;
    this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName: string | undefined) {
    this.weatherService.getWeatherData(cityName).subscribe((response: any) => {
      if (response) {
        this.weatherData = response;
        console.log(this.weatherData);
      }
    }
    );
  }
}
