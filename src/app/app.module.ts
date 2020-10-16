import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts/donuts.component';
import { DonutDetailComponent } from './donuts/donut-detail/donut-detail.component';
import { FamousPersonComponent } from './devs/famous-person/famous-person.component';
import { FamousPeopleComponent } from './devs/famous-people/famous-people.component';
import { DonutPartialDetailComponent } from './donuts/donut-partial-detail/donut-partial-detail.component';
import { AddPersonComponent } from './devs/add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailComponent,
    FamousPersonComponent,
    FamousPeopleComponent,
    DonutPartialDetailComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
