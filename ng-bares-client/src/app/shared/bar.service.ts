import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Bar } from './bar';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  //private barsUrl = 'api/bars';
  private barsUrl = 'localhost:8000/bars';

  constructor(private http: HttpClient) { }

  getBars(): Observable<Bar[]> {
    return this.http.get<Bar[]>(this.barsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxBarId(): Observable<Bar> {
    return this.http.get<Bar[]>(this.barsUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getBarById(id: number): Observable<Bar> {
    const url = `${this.barsUrl}/${id}`;
    return this.http.get<Bar>(url)
      .pipe(
        tap(data => console.log('getBar: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createBar(bar: Bar): Observable<Bar> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    bar.id = null;
    return this.http.post<Bar>(this.barsUrl, bar, { headers: headers })
      .pipe(
        tap(data => console.log('createBar: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteBar(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.barsUrl}/${id}`;
    return this.http.delete<Bar>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteBar: ' + id)),
        catchError(this.handleError)
      );
  }

  updateBar(bar: Bar): Observable<Bar> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.barsUrl}/${bar.id}`;
    return this.http.put<Bar>(url, bar, { headers: headers })
      .pipe(
        tap(() => console.log('updateBar: ' + bar.id)),
        // Return the bar on an update
        map(() => bar),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
