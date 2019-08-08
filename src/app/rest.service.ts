import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})



export class RestService {

  constructor(private http: HttpClient, public datepipe: DatePipe) {  }

    asteroidendpoint = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=x333Xgh1agcRko4bRHQfDZy6eh133z4YGgSblBy5&start_date=';
    weatherendpoint = 'https://api.nasa.gov/DONKI/notifications?api_key=x333Xgh1agcRko4bRHQfDZy6eh133z4YGgSblBy5'
    nasaimageendpoint = 'https://images-api.nasa.gov/';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAsteroids(today): Observable<any> {
  return this.http.get(this.asteroidendpoint + today).pipe(
    map(this.extractData));
  }

   getWeather(): Observable<any> {
    return this.http.get(this.weatherendpoint).pipe(
      map(this.extractData));
  }

  getImages(): Observable<any> {
    return this.http.get(this.nasaimageendpoint + 'search?q=moon').pipe(
      map(this.extractData));
  }


  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

}
