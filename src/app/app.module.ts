import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

import { CreateStockComponent } from "./create-stock/create-stock.component";
import { UpdateStockComponent } from "./update-stock/update-stock.component";
import { ListStocksComponent } from "./list-stocks/list-stocks.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    UpdateStockComponent,
    ListStocksComponent
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
