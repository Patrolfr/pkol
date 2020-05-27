import {EventEmitter} from '@angular/core';
import {BucketActions} from '../ngRx-store/bucket.actions';


export class BucketEventsEmitter extends EventEmitter<BucketActions> {
}
