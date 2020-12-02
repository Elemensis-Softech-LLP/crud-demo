import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {User} from '../user-data';
import { UserFetch } from '../user-fetch';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
 
 

  apiurl = 'api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };


  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  addUser (user: UserFetch): Observable<UserFetch> {
    // user.id=null;
    return this.http.post<UserFetch>(this.apiurl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
}
deleteUser(id: number): Observable<UserFetch> {
  const url = `${this.apiurl}/${id}`;
  return this.http.delete<UserFetch>(url, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}

}
