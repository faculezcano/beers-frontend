import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<User> | undefined;

  constructor(private http: HttpClient) {}

  getUser(): any {}

  login(email: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { email, password })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {}
      );
  }

  logout() {}
}
