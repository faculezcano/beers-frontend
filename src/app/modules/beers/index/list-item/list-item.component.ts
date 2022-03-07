import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../../../models/beer';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() beer: Beer | undefined;

  public srmToColor = Beer.getColor;

  constructor() {}

  ngOnInit(): void {}
}
