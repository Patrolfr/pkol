import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Store} from '@ngrx/store';
import {AddProduct} from '../../ngRx-store/bucket.actions';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {Review} from '../../domain/model/review.model';
import {ReviewService} from '../../service/review.service';
import {BucketEventsEmitter} from '../../service/bucket-events-emitter';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
@Injectable()
export class ProductDetailsComponent implements OnInit {

  inputForm: FormGroup;
  public product: Product;
  public reviews: Review[] = [];
  reviewForm: FormGroup;
  submitted = false;
  showContent = false;

  constructor(private route: ActivatedRoute,
              public authenticationService: AuthenticationService,
              private productService: ProductService,
              private reviewService: ReviewService,
              private store: Store,
              private emitter: BucketEventsEmitter,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    console.log(this.product);
    const defaultProductAmount = 1;
    this.inputForm = new FormGroup({
      productAmount: new FormControl(defaultProductAmount, Validators.pattern('^[1-9]+[0-9]*$')),
    });

    this.route.params.subscribe((params: Params) => {
      const productId = Number(params.id); // handling so called type safety of Type Script..
      this.product = this.productService.getProductById(productId);
      console.log('this.product');
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

    this.reviewService.sendReview(data).subscribe(response => {
      window.alert('Comment added.');
      window.location.reload();
    }, error => {
      window.alert(error);
      });
  }

  onSubmitItem() {
    this.addToBucket(this.inputForm.value.productAmount);
  }

  addToBucket(amountOfProducts: number = 1) {
    const addEvent = new AddProduct({amount: amountOfProducts, product: this.product});
    this.store.dispatch(addEvent);
    this.emitter.emit(addEvent);
  }
}
