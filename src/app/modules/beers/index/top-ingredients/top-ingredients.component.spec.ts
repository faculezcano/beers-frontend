import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIngredientsComponent } from './top-ingredients.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TopIngredientsComponent', () => {
  let component: TopIngredientsComponent;
  let fixture: ComponentFixture<TopIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopIngredientsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopIngredientsComponent);
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
