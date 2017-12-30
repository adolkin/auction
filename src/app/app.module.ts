import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './pipes/filter-pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    CarouselComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
