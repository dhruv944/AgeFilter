import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeDataService {

  allData: any = [
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 12,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 15,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 22,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 32,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 48,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 52,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 62,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 78,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 72,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 20,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 55,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 87,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 74,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    },
    {
      id: 1140070, image: 'abc', name: 'Mr. Abdu-Allah Salem Shantouf', age: 60,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore.`
    }
  ];
  constructor() { }

  getFilterOptions() {
    return [
      { id: 1, label: '3,456', description: 'below 20yrs' },
      { id: 2, label: '121', description: '20 to 40yrs' },
      { id: 3, label: '54', description: '40 to 60yrs' },
      { id: 4, label: '34', description: 'above 60yrs' }
    ]
  }

  getFilteredData(appliedFilters: any) {
    if (appliedFilters.length < 1) {
      return this.allData;
    } else {
      const data = this.allData.filter(item => {

        if (appliedFilters.indexOf(1) > -1 && item.age < 20) {
          return true;
        } else if (appliedFilters.indexOf(2) > -1 && item.age >= 20 && item.age < 40) {
          return true;
        } else if (appliedFilters.indexOf(3) > -1 && item.age >= 40 && item.age < 60) {
          return true;
        } else if (appliedFilters.indexOf(4) > -1 && item.age >= 60) {
          return true;
        } else { return false; }
      });

      return data;
    }
  }
}
