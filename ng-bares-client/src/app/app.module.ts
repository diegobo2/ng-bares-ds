import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BarItemComponent } from './bar-item/bar-item.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarService } from './shared/bar.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BarEditComponent } from './bar-edit/bar-edit.component';
import { BarData } from './shared/bar-data';
import { HttpClientModule } from '@angular/common/http';
import { BarNewComponent } from './bar-new/bar-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BarItemComponent,
    BarDetailComponent,
    BarEditComponent,
    BarNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BarData)
  ],
  providers: [BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
