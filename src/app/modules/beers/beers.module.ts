import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { ShowComponent } from './show/show.component';
import { IndexComponent } from './index/index.component';
import { IngredientsComponent } from './show/ingredients/ingredients.component';
import { ListItemComponent } from './index/list-item/list-item.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AutocompleteComponent } from './index/autocomplete/autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TopIngredientsComponent } from './index/top-ingredients/top-ingredients.component';
import { BeersListComponent } from './index/beers-list/beers-list.component';

@NgModule({
  declarations: [
    ShowComponent,
    IndexComponent,
    IngredientsComponent,
    ListItemComponent,
    AutocompleteComponent,
    TopIngredientsComponent,
    BeersListComponent,
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    NgxTypeaheadModule,
    AutocompleteLibModule,
  ],
})
export class BeersModule {}
