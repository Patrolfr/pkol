import {Component, OnInit} from '@angular/core';
import {BucketEventsEmitter} from '../../service/bucket-events-emitter';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AddProduct} from '../../ngRx-store/bucket.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private emitter: BucketEventsEmitter,
              private _snackBar: MatSnackBar) {

    this.emitter.subscribe(action => {
      if (action instanceof AddProduct) {
        this.showSuccessBar(action.payload.amount);
      }
    });
  }

  ngOnInit(): void {
  }

  showSuccessBar(count: number) {
    this.openSnackBar('Dodano produkt do koszyka, sztuk: ' + count, null);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(
      message,
      action,
      {
        panelClass: ['green-snackbar'],
        duration: 2000,
      }
    );
  }

}
