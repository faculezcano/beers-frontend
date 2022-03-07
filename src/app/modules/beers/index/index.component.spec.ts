import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeersListComponent } from './beers-list/beers-list.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TopIngredientsComponent } from './top-ingredients/top-ingredients.component';

describe('BeersComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        BeersListComponent,
        AutocompleteComponent,
        TopIngredientsComponent,
      ],
      imports: [HttpClientTestingModule, AutocompleteLibModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
