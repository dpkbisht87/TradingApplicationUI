import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { ListStocksComponent } from './list-stocks/list-stocks.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-stock', component: CreateStockComponent },
  { path: 'list-stock', component: ListStocksComponent },
  { path: 'update-stock/:id', component: UpdateStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
