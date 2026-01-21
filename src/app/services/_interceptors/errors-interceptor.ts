import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((httpError: HttpErrorResponse) => {
      snackBar.open('Erro: ' + httpError.error, 'Fechar', { duration: 5000, horizontalPosition: 'end', verticalPosition: 'top' });
      throw httpError;
    })
  );
};
