// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersUrl = 'assets/users.json'; // Path to your users.json file

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        return !!user; // Return true if user exists, false otherwise
      }),
      catchError(() => of(false)) // Handle errors by returning false
    );
  }
}
