import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  private id: number | undefined;
  public beer: any;

  public srmToColor = Beer.getColor;

  constructor(
    private router: ActivatedRoute,
    public beersService: BeersService
  ) {
    router.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.beersService.getBeer(this.id).subscribe((beer) => {
        this.beer = beer;
      });
    }
  }
}
