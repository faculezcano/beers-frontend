import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Beer } from '../models/beer';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  constructor(private http: HttpClient) {}

  getBeers(params: any = {}): any {
    return this.http.get(`${environment.apiUrl}/beers`, {
      params: params,
    });
  }
}
