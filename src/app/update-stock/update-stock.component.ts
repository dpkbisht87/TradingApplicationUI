import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  stockData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getStock(this.id).subscribe((data: {}) => {
      this.stockData = data;
      let i = 1
      console.log('id: ' + this.stockData.id);
      console.log('name: ' + this.stockData.name);
      console.log('currentPrice: ' + this.stockData.currentPrice);
      console.log('lastUpdate: ' + this.stockData.lastUpdate);
      console.log('locked: ' + this.stockData.locked);
    })
  }

  // Update stock price
  updateStock() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateStock(this.id, this.stockData).subscribe(data => {
        this.router.navigate(['/list-stock'])
      })
    }
  }

}
