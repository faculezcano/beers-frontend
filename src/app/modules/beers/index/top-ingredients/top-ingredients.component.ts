import { Component, Input, OnInit } from '@angular/core';
import { BeersService } from '../../../../services/beers.service';

@Component({
  selector: 'app-top-ingredients',
  templateUrl: './top-ingredients.component.html',
  styleUrls: ['./top-ingredients.component.scss'],
})
export class TopIngredientsComponent implements OnInit {
  @Input() ingredients: any[] = [];

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.getTopUsedIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients as any[];
    });
  }
}
