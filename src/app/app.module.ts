import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { AgeDataService } from './services/age-data.service';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponentComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AgeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
