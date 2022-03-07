import { Component, Input, OnInit } from '@angular/core';
import { BeersService } from '../../../../services/beers.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss'],
})
export class BeersListComponent implements OnInit {
  @Input() clearWhenNoParams: boolean = false;
  @Input() loadWithoutParams: boolean = true;
  @Input() loadOnInit: boolean = true;

  private _params: any = {};
  @Input() set params(params: any) {
    this._params = params;
    if (Object.keys(params).length != 0 || this.loadWithoutParams) {
      this.loadBeers();
    } else {
      if (this.clearWhenNoParams) {
        this.clear();
      }
    }
  }
  get params() {
    return this._params;
  }

  public beers: any[] = [];
  public loading = false;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    if (this.loadOnInit) {
      this.loadBeers();
    }
  }

  loadBeers() {
    this.loading = true;
    this.beersService.getBeers(this.params).subscribe((beers) => {
      this.beers = beers as any[];
      this.loading = false;
    });
  }

  clear() {
    this.beers = [];
  }
}
