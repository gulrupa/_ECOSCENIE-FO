import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultListComponent } from './result-list/result-list.component'; // CLI imports router


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'produits',
    component: ResultListComponent
  },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
