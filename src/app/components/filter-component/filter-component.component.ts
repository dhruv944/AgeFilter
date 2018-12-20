import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {
  @Input() filterLabel: any;
  @Input() filterOptions: any;
  @Output() filterChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onOptionClick(option: any) {
    option.isSelected = !option.isSelected;
    this.filterChanged.emit(option);
  }

}
