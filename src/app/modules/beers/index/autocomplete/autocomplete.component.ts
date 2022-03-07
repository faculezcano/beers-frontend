import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BeersService } from '../../../../services/beers.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @Input() url: string = '';
  @Output() selected = new EventEmitter<any>();

  public list: any[] = [];
  public value: string = '';

  private searchTimer: number | undefined;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {}

  input(term: string) {
    this.list = [];

    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }

    if (term) {
      this.searchTimer = setTimeout(() => {
        this.search(term);
      }, 500);
    }
  }

  search(term: string) {
    this.beersService.search(term).subscribe((results) => {
      this.list = (results as any[]) || [];
    });
  }

  handleSelected(event: any) {
    this.selected.emit(event);
    this.value = event.value;
  }
}
