import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Store} from '@ngrx/store';
import {AddProduct} from '../../ngRx-store/bucket.actions';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {Review} from '../../domain/model/review.model';
import {ReviewService} from '../../service/review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
@Injectable()
export class ProductDetailsComponent implements OnInit {

  @ViewChild('productsAmountForm') productsAmountForm: NgForm;
  public product: Product;
  public reviews: Review[] = [];
  reviewForm: FormGroup;
  submitted = false;
  public newReview: Review;

  constructor(private route: ActivatedRoute,
              public authenticationService: AuthenticationService,
              private productService: ProductService,
              private reviewService: ReviewService,
              private store: Store,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const productId = Number(params.id); // handling so called type safety of Type Script..
      this.product = this.productService.getProductById(productId);
      console.log(this.product);
    });

    this.reviewService.getProductReviews(this.product.id).subscribe(data => {
      for (const element of data) {
        const review = {
          username: element.user.username,
          rating: element.rating,
          comment: element.comment,
        };

        this.reviews.push(review);

      }
      console.log(this.reviews);
    });

    if (this.authenticationService.isLogged()){
      this.reviewForm = this.formBuilder.group({
        rating: ['', [Validators.required]],
        comment: ['', [Validators.required]],
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.reviewForm.controls; }

  onSubmitReview() {
    this.submitted = true;
    if (this.reviewForm.invalid) {
      window.alert('Review is invalid');
    }

    const data = {
      rating: this.reviewForm.value.rating,
      product: this.product.id,
      comment: this.reviewForm.value.comment,
    };


    console.log(data);

    this.reviewService.sendReview(data).subscribe(response => {
      window.alert('Comment added.');
      window.location.reload();
    }, error => {
      window.alert(error);
      });


  }


  onSubmitItem() {
    this.addToBucket(this.productsAmountForm.value.amount);
  }

  addToBucket(amountOfProducts: number = 1) {
    this.store.dispatch(new AddProduct(
      {amount: amountOfProducts, product: this.product})
    );
  }

  canAddToBucket(): boolean {
    return this.authenticationService.isLogged();
  }

  sendReview(data) {
    return this.reviewService.sendReview(data).subscribe(response => {
      window.location.reload();
    }, error => {
      window.alert('Błąd wysyłki opinii.');
    });

  }


}
