import {Product} from '../domain/model/product.model';
import {ADD_PRODUCT, AddProduct, BucketActions, REMOVE_PRODUCT, RemoveProduct} from './bucket.actions';

export class BucketEntry {
  constructor(public product: Product,
              public amount: number) {
  }

  public getTotalPrice(): number {
    return this.amount * this.product.price;
  }
}

export interface AppState {
  bucketState: BucketState;
  new
}

export interface BucketState {
  productsIn: Product[];
  entries: BucketEntry[];
  productsInIds: number[];
  totalCostInPln: number;
}

const initialState: BucketState = {
  entries: [],
  productsIn: [],
  productsInIds: [],
  totalCostInPln: 0
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
      return {
        ...state,
        productsIn: [...state.productsIn, addAction.payload.product],
        productsInIds: [...state.productsInIds, addAction.payload.product.id],
        entries: [...bucketEntries, entryUpdatedOrNew],
        totalCostInPln: state.totalCostInPln + 1
      };
    case REMOVE_PRODUCT:
      const action2 = action as RemoveProduct;
      let bucketEntries2 = [...state.entries].slice();
      bucketEntries2 = bucketEntries2.filter((item => item.product.id !== action2.payload));
      return {
        ...state,
        entries: [...bucketEntries2],
      };
    default:
      return state;
  }

}


