// app.module.ts
import { FilterSearchComponent } from './filter-search/filter-search.component'; // Import UserTableComponent
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // If not already imported
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { SwotPieChartComponent } from './swot-pie-chart/swot-pie-chart.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BaseChartDirective} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    HeaderComponent,
    SidenavComponent,
    FilterSearchComponent,
    HomeComponent,
    VisualizationComponent,
    SwotPieChartComponent,
    Component2Component,
    Component3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSidenav,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatPaginatorModule,
    BaseChartDirective,


    // If needed
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
