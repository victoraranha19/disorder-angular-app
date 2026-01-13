import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { catchError, tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.loading.set(true);
  return next(req).pipe(
    tap(() => {
      loadingService.loading.set(false);
    }),
    catchError((err: Error) => {
      loadingService.loading.set(false);
      throw err;
    })
  );
};
