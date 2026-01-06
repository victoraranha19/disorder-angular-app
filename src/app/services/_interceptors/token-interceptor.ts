import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
  return next(req);
};
