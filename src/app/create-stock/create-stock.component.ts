import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Stock } from '../shared/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  @Input() stockDetails = { name: '', currentPrice: '' }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }


  ngOnInit(): void {
  }
  addStock() {
    this.restApi.createStock(this.stockDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-stock'])
    })
  }

  numberOnly(event:any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
