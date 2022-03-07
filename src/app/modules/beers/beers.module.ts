import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { ShowComponent } from './show/show.component';
import { IndexComponent } from './index/index.component';
import { IngredientsComponent } from './show/ingredients/ingredients.component';

@NgModule({
  declarations: [ShowComponent, IndexComponent, IngredientsComponent],
  imports: [CommonModule, BeersRoutingModule],
})
export class BeersModule {}
