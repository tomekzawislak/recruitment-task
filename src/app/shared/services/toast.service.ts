import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) { }

  public showError(message: string): void {
    this.openSnackBar(message, undefined, this.getSnackbarConfig('toast-error'));
  }

  public showSuccess(message: string): void {
    this.openSnackBar(message, undefined, this.getSnackbarConfig('toast-success'));
  }

  private getSnackbarConfig(panelClass: string): MatSnackBarConfig {
    return {
      duration: 3000,
      panelClass: panelClass,
      horizontalPosition: 'left'
    }
  }

  private openSnackBar(message: string, action: string | undefined, config?: MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }

  private closeSnackBar(): void {
    this._snackBar.dismiss();
  }
}
