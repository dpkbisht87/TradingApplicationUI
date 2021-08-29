import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-stock',
  templateUrl: './get-stock.component.html',
  styleUrls: ['./get-stock.component.css']
})
export class GetStockComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  stockData: any = {};
  isStockReceived: boolean = false

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
  getStock() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.getStock(this.id).subscribe(data => {
        this.router.navigate(['/get-stock', this.stockData.id])
      })
    }
  }

}
