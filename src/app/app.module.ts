import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IconCardComponent } from './icon-card/icon-card.component';
import { IconWithFiguresRowComponent } from './icon-with-figures-row/icon-with-figures-row.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LandingComponent } from './landing/landing.component';
import { ResultListComponent } from './result-list/result-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { OrderDashboardComponent } from './pages/order-dashboard/order-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    IconCardComponent,
    IconWithFiguresRowComponent,
    ContactFormComponent,
    LandingComponent,
    ResultListComponent,
    NotFoundComponent,
    ProductCardComponent,
    OrderDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
