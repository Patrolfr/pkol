import {Action} from '@ngrx/store';
import {Product} from '../domain/model/product.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export class AddProduct implements Action {
  type: string = ADD_PRODUCT;

  constructor(public payload: { amount: number, product: Product }) {
  }
}

export class RemoveProduct implements Action {
  type: string = REMOVE_PRODUCT;

  constructor(public payload: number) {
  }
}

export class OrderSubmitted implements Action {
  type: string = SUBMIT_ORDER;
  public payload: any;

  constructor() {
  }
}

export type BucketActions = AddProduct | RemoveProduct | OrderSubmitted;
