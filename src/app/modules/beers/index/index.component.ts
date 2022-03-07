import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';
import * as tinycolor from 'tinycolor2';

@Component({
  selector: 'app-beers',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public beers: Array<Beer> = [];
  public loading = false;
  private searchTimer: number | undefined = undefined;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.loadBeers();
  }

  loadBeers(params = {}) {
    this.loading = true;

    this.beersService.getBeers(params).subscribe((beers: Array<Beer>) => {
      this.beers = beers;
      this.loading = false;
    });
  }

  // this function transforms srm value to color
  getSRMColor(srm: number | undefined): string {
    if (!srm) {
      let bodyStyles = window.getComputedStyle(document.body);
      return bodyStyles.getPropertyValue('--bs-secondary');
    }

    const color = new tinycolor('#F7D281');
    color.spin(-srm); // this gives reddish tone
    return color.darken(srm).toHexString();
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

  search(term: string) {
    this.loadBeers({
      q: term,
    });
  }
}
