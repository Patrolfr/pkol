import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {ProductService} from '../../service/product.service';
import {ReviewService} from '../../service/review.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../domain/model/review.model';
import {Product} from '../../domain/model/product.model';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  public reviews: Review[] = [];
  reviewForm: FormGroup;
  submitted = false;
  private productId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  private product: Product;

  constructor(private route: ActivatedRoute,
              public authenticationService: AuthenticationService,
              private productService: ProductService,
              private reviewService: ReviewService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.product = this.productService.getProductById(this.productId);

    this.reviewService.getProductReviews(this.productId).subscribe(data => {
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

  onSubmitReview() {

    this.submitted = true;
    if (this.reviewForm.invalid) {
      window.alert('Review is invalid');
    }

    const data = {
      rating: this.reviewForm.value.rating,
      product: this.productId,
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

}
