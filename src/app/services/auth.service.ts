import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userSubject: BehaviorSubject<User | undefined>;
  public user: Observable<User | undefined>;
  public accessToken: string | null;

  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem('access_token');
    this.userSubject = new BehaviorSubject<User | undefined>(undefined);
    this.user = this.userSubject.asObservable();
  }

  getUser(): any {
    this.http
      .get(`${environment.apiUrl}/auth/user`)
      .subscribe((response: any) => {
        this.userSubject.next(response);
        return response;
      });
  }

  login(email: string, password: string) {
    // TODO: Use observable interface
    return new Promise((resolve, reject) => {
      this.http
        .post(`${environment.apiUrl}/auth/login`, { email, password })
        .subscribe(
          (response: any) => {
            localStorage.setItem('access_token', response.access_token);
            this.accessToken = response.access_token;
            this.getUser();
            resolve(response);
            return response;
          },
          (error) => {
            reject(error);
            return error;
          }
        );
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.accessToken = null;
    this.userSubject.next(undefined);
  }
}
