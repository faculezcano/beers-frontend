import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as tinycolor from 'tinycolor2';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = `${environment.apiUrl}/beers`;
  }

  getBeers(params: any = {}): any {
    return this.http.get(this.serviceUrl, {
      params: params,
    });
  }

  getBeer(id: number) {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }
}
