import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-beers',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public typeAheadURL = `${environment.apiUrl}/beers/search`;
  public beers: Beer[] = [];
  public top10Beers: Beer[] = [];
  public loading = false;
  private searchTimer: number | undefined = undefined;

  constructor(public beersService: BeersService) {}

  ngOnInit(): void {
    this.loadBeers();
  }

  loadBeers(params = {}) {
    this.loading = true;

    this.beersService.getBeers(params).subscribe((beers: Beer[]) => {
      this.beers = beers;
      this.loading = false;
    });
  }

  loadTopBeers(params: any = {}) {
    params.order = 'first_brewed';
    this.beersService.getBeers(params).subscribe((beers: Beer[]) => {
      this.top10Beers = beers;
    });
  }

  searchInput(event: Event) {
    this.loading = true;

    const term = (<HTMLInputElement>event.target).value;
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }

    this.searchTimer = setTimeout(() => {
      this.search(term);
    }, 500);
  }

  search(query: any) {
    let params: any = {};

    if (query.type == 'beer') {
      params['filter[name]'] = query.value;
    }

    if (query.type == 'hops') {
      params['filter[ingredients.hops.name]'] = query.value;
    }

    if (query.type == 'malt') {
      params['filter[ingredients.malt.name]'] = query.value;
    }

    if (query.type == 'yeast') {
      params['filter[ingredients.yeast]'] = query.value;
    }

    this.loadTopBeers(params);
  }
}
