import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersListComponent } from './beers-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeersListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
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
