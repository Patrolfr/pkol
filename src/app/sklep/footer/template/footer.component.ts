import {Component, OnInit} from '@angular/core';
import {BucketEventsEmitter} from '../../service/bucket-events-emitter';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ADD_PRODUCT, BucketActions, REMOVE_PRODUCT, SUBMIT_ORDER} from '../../ngRx-store/bucket.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private emitter: BucketEventsEmitter,
              private _snackBar: MatSnackBar) {

    this.emitter.subscribe((action: BucketActions) => {
      switch (action.type) {
        case ADD_PRODUCT:
          this.showSuccessfulBar('Dodano produkt do koszyka, sztuk: ' + action.payload.amount + '.');
          break;
        case REMOVE_PRODUCT:
          this.showDangerBar('Usunięto produkt z koszyka.');
          break;
        case SUBMIT_ORDER:
          this.showSuccessfulBar('Zamówienie zostało przyjęte do realizacji.');
          break;
      }
    });
  }

  ngOnInit(): void {
  }

  showSuccessfulBar(text: string) {
    this.openGreenSnackBar(text);
  }

  showDangerBar(text: string) {
    this.openRedSnackBar(text);
  }

  openGreenSnackBar(message: string) {
    this.openSnackBar(message, null, 'green-snackbar');
  }

  openRedSnackBar(message: string) {
    this.openSnackBar(message, null, 'red-snackbar');
  }

  openSnackBar(message: string, action: string, panelClass: string) {
    this._snackBar.open(
      message,
      action,
      {
        panelClass: [panelClass],
        duration: 2000,
      }
    );
  }

}
