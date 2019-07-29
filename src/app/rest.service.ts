import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

const asteroidendpoint = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=x333Xgh1agcRko4bRHQfDZy6eh133z4YGgSblBy5';
const weatherGMSendpoint = 'https://api.nasa.gov/DONKI/GST?api_key=x333Xgh1agcRko4bRHQfDZy6eh133z4YGgSblBy5'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAsteroids(): Observable<any> {
  return this.http.get(asteroidendpoint).pipe(
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
