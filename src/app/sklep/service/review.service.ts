import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const SEND_REVIEW_URL = 'http://137.135.245.109:8000/users/review/';
export const PRODUCT_REVIEWS_URL = SEND_REVIEW_URL + '?product=';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient) {
  }

  getProductReviews(productId: number) {
    return this.http.get<any>(PRODUCT_REVIEWS_URL + productId);
  }

  sendReview(data) {
    return this.http.post<any>(SEND_REVIEW_URL, data);
  }
}
