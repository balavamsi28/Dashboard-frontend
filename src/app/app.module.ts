// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // If not already imported

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component'; // Import UserTableComponent

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent // Declare UserTableComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // If needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
