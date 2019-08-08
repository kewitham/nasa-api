import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-space-dashboard',
  templateUrl: './space-dashboard.component.html',
  styleUrls: ['./space-dashboard.component.css']
})
export class SpaceDashboardComponent implements OnInit {

   items: any = [];
  asteroids: any = [];
  images: any = [];
  weather: any = [];
  asteroidDates: any = [];
  type: string [];
  time: string [];
  today: string [];
  message: string [];
  CAD: string [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    var today = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.getAsteroids(today);
    this.getImages();
    this.getWeather();
  }

 getAsteroids(today) {
    this.asteroids = [];
    this.rest.getAsteroids(today).subscribe((data: {}) => {
     console.log(data);
      this.items = data as object[];
      this.asteroids = this.items["near_earth_objects"];
   //   console.log(this.asteroids);
    for (let i = 0; i < this.items["near_earth_objects"].length; i++) { 
      this.asteroidDates = this.items["near_earth_objects"][i][0]["close_approach_data"][0]["close_approach_date"];
      console.log(this.asteroidDates);
     
        this.asteroidDates = this.asteroids[i];
      console.log(this.asteroidDates);
         // this.CAD = this.asteroidDates[i];
         // console.log(this.CAD);
        
      }
    });
  }
   getImages() {
    this.images = [];
    this.rest.getImages().subscribe((data: {}) => {
      console.log(data);
      this.items = data as object[];
    });
   }
  getWeather() {
    this.weather = [];
    this.rest.getWeather().subscribe((data: {}) => {
    //  console.log(data);
      this.weather = data as object[];
      //this.weather = data["items"];
     console.log(this.weather);
      for (let i = 0; i < this.weather.length; i++) {
      this.type = this.weather[i].messageType;
    //  console.log(this.type);
      this.message = this.weather[i].messageBody;
     // console.log(this.message);
      this.time = this.weather[i].messageIssueTime;
      }
    });
  }

}
