import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamousPeopleComponent } from './devs/famous-people/famous-people.component';
import { DonutsComponent } from './donuts/donuts/donuts.component';
import { DonutDetailComponent } from "./donuts/donut-detail/donut-detail.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/Devs'},
  {path: 'Devs', pathMatch: 'full', component: FamousPeopleComponent},
  {path: 'Donuts', pathMatch: 'full', component: DonutsComponent},
  {path: 'DonutDetails', pathMatch: 'full', component: DonutDetailComponent},
  {path: '**', component: DonutsComponent, data: {error: 404}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
