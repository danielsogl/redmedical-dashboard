import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export class BaseHttpService {
  constructor(private snackbar: MatSnackBar) {}

  /**
   * Displays a error toast message based on the error type.
   * If the error is an instance of `HttpErrorResponse` the
   * backend error will be displayed
   */
  handleRequestError(error: unknown) {
    let errorMessage: string = 'Unknown request error happened';
    if (error instanceof HttpErrorResponse) {
      errorMessage = `${error.status} - ${error.statusText}`;
    }
    this.snackbar.open(errorMessage, 'Ok', { duration: 2500 });
  }
}
