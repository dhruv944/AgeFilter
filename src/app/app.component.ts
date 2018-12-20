import { Component, OnInit } from '@angular/core';
import { AgeDataService } from './services/age-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'age-filter';
  filterOptions: any = [];
  ageData: any = [];
  appliedFilters: any = [];
  isFilterAvailable = false;
  constructor(private dataService: AgeDataService) {

  }

  ngOnInit() {
    this.filterOptions = this.dataService.getFilterOptions();
    this.ageData = this.dataService.getFilteredData(this.appliedFilters);
  }

  manageFilters(option: any) {
    this.appliedFilters = [];
    this.isFilterAvailable = false;
    this.filterOptions.forEach(item => {
      if (item.isSelected) {
        this.appliedFilters.push(item.id);
        this.isFilterAvailable = true;
      }
    });
    this.ageData = this.dataService.getFilteredData(this.appliedFilters);
  }

}
