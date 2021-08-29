import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-list-stocks',
  templateUrl: './list-stocks.component.html',
  styleUrls: ['./list-stocks.component.css']
})
export class ListStocksComponent implements OnInit {

  Stock: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadStocks()
  }

  // Get Stock list
  loadStocks() {
    return this.restApi.getStocks().subscribe((data: {}) => {
      this.Stock = data;
      let i = 1
      console.log('id: ' + this.Stock[i].id);
      console.log('name: ' + this.Stock[i].name);
      console.log('currentPrice: ' + this.Stock[i].currentPrice);
      console.log('lastUpdate: ' + this.Stock[i].lastUpdate);
      console.log('locked: ' + this.Stock[i].locked);
    })
  }

  // Delete stock
  deleteStock(id:string) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteStock(id).subscribe(data => {
        this.loadStocks()
      })
    }
  }
}
