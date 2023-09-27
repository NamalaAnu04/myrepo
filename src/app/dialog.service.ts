import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openSuccessDialog(): void {
    this.dialog.open(SuccessDialogComponent, {
      width: '300px', // Adjust the width as needed
    });
  }
}

