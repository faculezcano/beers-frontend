import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public beers: Beer[] = [];
  public top10Beers: Beer[] = [];
  public loading = false;
  private searchTimer: number | undefined = undefined;

  public srmToColor = Beer.getColor;

  constructor(public beersService: BeersService) {}

  ngOnInit(): void {
    this.loadBeers();
  }

  loadBeers(params = {}) {
    this.loading = true;

    this.beersService.getBeers(params).subscribe((beers: Beer[]) => {
      this.beers = beers;
      this.top10Beers = beers.sort((a, b) => 1 - 1).splice(0, 10);
      this.loading = false;
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

  search(term: string) {
    this.loadBeers({
      q: term,
    });
  }
}
