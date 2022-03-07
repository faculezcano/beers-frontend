import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { ShowComponent } from './show/show.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [ShowComponent, IndexComponent],
  imports: [CommonModule, BeersRoutingModule],
})
export class BeersModule {}
