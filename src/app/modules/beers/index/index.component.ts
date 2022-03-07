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
  public topBeersParams: any = {};

  constructor(public beersService: BeersService) {}

  ngOnInit(): void {}
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

    this.topBeersParams = params;
  }
}
