import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../service/data.service';
import {Product} from '../domain/model/product.model';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('partialNameForm') partialNameForm: NgForm;

  selectedProduct: Product;
  matchedProducts: Product[];

  constructor(
    private authenticationService: AuthenticationService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  searchByPartialName(event) {
    const partialName = event.query;
    this.dataService.getProductByPartialName(partialName).subscribe(data => {
      this.matchedProducts = data;
    });
  }

  navigateToProduct() {
    this.router.navigate(['product', this.selectedProduct.id]);
  }

  isUserLoggedIn(): boolean {
    return this.authenticationService.isLogged();
  }

}
