import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../shared/stock';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch Stock list
  getStocks(): Observable<Stock> {
    return this.http.get<Stock>(this.apiURL + '/stocks')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API get() method => Fetch stock
  getStock(id:string): Observable<Stock> {
    return this.http.get<Stock>(this.apiURL + '/stocks/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Create stock
  createStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiURL + '/stocks', JSON.stringify(stock), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update stock
  updateStock(id:string, stock: Stock): Observable<Stock> {
    return this.http.put<Stock>(this.apiURL + '/stocks/' + id, JSON.stringify(stock), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete stock
  deleteStock(id:string) {
    return this.http.delete<Stock>(this.apiURL + '/stocks/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
