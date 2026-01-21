import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { catchError, tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.addRequest(req.url);

  return next(req).pipe(
    tap((event) => {
      if (event.type) {
        loadingService.removeRequest(req.url);
      }
    }),
    catchError((err: HttpErrorResponse) => {
      loadingService.removeRequest(req.url);
      throw err;
    })
  );
};
