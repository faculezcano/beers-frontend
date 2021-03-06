import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = `${environment.apiUrl}/beers`;
  }

  getBeers(params: any = {}): Observable<Object> {
    return this.http.get(this.serviceUrl, {
      params: params,
    });
  }

  getBeer(id: number) {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }

  search(term: string) {
    return this.http.get(`${this.serviceUrl}/search?q=${term}`);
  }

  getTopUsedIngredients() {
    return this.http.get(`${this.serviceUrl}/topUsedIngredients`);
  }
}
