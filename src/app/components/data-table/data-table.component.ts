import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() filterOptions: any;
  @Input() data: any;
  @Input() isFilterAvailable: any;
  @Output() filterChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearFilter(option: any) {
    option.isSelected = !option.isSelected;
    this.filterChanged.emit(option);
  }

}
