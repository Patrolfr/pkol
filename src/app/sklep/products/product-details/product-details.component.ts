import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {DataService} from '../../service/data.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
@Injectable()
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.dataService.getProductById(params.id);
    });
  }

}
