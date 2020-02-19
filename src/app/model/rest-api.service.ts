import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:50412/Api';
    
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API post() method => Create employee
  createCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiURL + '/insertarCliente', JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  deleteCustomer(customer): Observable<Customer> {
    return this.http.delete<Customer>(this.apiURL + '/eliminarCliente/' + customer.tipo_documento +"/"+customer.documento,  this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  editCustomer(customer): Observable<Customer> {
    return this.http.put<Customer>(this.apiURL + '/actualizarCliente', JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  findCustomer(customer): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + '/consultarCliente/' + customer.tipo_documento +"/"+customer.documento,  this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
    
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
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
