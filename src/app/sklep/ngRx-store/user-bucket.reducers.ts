import {Product} from '../domain/model/product.model';
import {ADD_PRODUCT, AddProduct, BucketActions, REMOVE_PRODUCT, RemoveProduct} from './bucket.actions';

export class BucketEntry {
  constructor(public product: Product,
              public amount: number) {
  }


  public hasDiscount(): boolean {
    return this.product.discount !== 0;
  }

  public formatInitialCost(): string {
    return String(this.amount * this.product.price);
  }

  public formatFinalCost(): string {
    const finalCost = this.amount * (this.product.price - this.product.discount);
    return String(finalCost.toFixed(2));
  }

  public getTotalPrice(): number {
    return this.amount * this.product.price;
  }

  public getTotalDiscount(): number {
    return this.amount * this.product.discount;
  }
}

export interface AppState {
  bucketState: BucketState;
}

export interface BucketState {
  productsIn: Product[];
  entries: BucketEntry[];
  productsInIds: number[];
  totalCostInPln: number;
  totalDiscountInPln: number;
  totalAmount: number;
}

const initialState: BucketState = {
  entries: [],
  productsIn: [],
  productsInIds: [],
  totalCostInPln: 0,
  totalDiscountInPln: 0,
  totalAmount: 0
};

export function bucketReducer(state: BucketState = initialState, action: BucketActions) {
  switch (action.type) {
    case ADD_PRODUCT:
      const addAction = action as AddProduct;
      let bucketEntries = [...state.entries].slice();
      let entryUpdatedOrNew = bucketEntries.find(it => it.product.id === addAction.payload.product.id);
      bucketEntries = bucketEntries.filter((item => item !== entryUpdatedOrNew));
      if (entryUpdatedOrNew != null) {
        entryUpdatedOrNew = new BucketEntry(entryUpdatedOrNew.product, entryUpdatedOrNew.amount + addAction.payload.amount);
      } else {
        entryUpdatedOrNew = new BucketEntry(addAction.payload.product, addAction.payload.amount);
      }
      const newEntries = [...bucketEntries, entryUpdatedOrNew];

      let totalCostInPln = 0;
      let totalDiscountInPln = 0;
      let totalAmount = 0;
      newEntries.forEach((it: BucketEntry) => {
        totalCostInPln = totalCostInPln + it.getTotalPrice();
        totalDiscountInPln = totalDiscountInPln + it.getTotalDiscount();
        totalAmount = totalAmount + it.amount;
      });

      return {
        ...state,
        productsIn: [...state.productsIn, addAction.payload.product],
        productsInIds: [...state.productsInIds, addAction.payload.product.id],
        entries: newEntries,
        totalCostInPln: totalCostInPln,
        totalDiscountInPln: totalDiscountInPln,
        totalAmount: totalAmount,
      };
    case REMOVE_PRODUCT:
      const action2 = action as RemoveProduct;
      let bucketEntries2 = [...state.entries].slice();
      bucketEntries2 = bucketEntries2.filter((item => item.product.id !== action2.payload));

      bucketEntries2.forEach((it: BucketEntry) => {
        totalCostInPln = totalCostInPln + it.getTotalPrice();
        totalDiscountInPln = totalDiscountInPln + it.getTotalDiscount();
        totalAmount = totalAmount + it.amount;
      });
      return {
        ...state,
        entries: [...bucketEntries2],
      };
    default:
      return state;
  }

}


