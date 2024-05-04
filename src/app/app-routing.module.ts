import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { HomeComponent } from './home/home.component';
import { VisualizationComponent } from './visualization/visualization.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Redirect empty path to /home
  { path: 'filter-search', component: FilterSearchComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'visualization', component: VisualizationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
