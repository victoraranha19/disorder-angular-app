import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioLogado = inject(UsuariosService).verificaUsuarioLogado();
  if (!usuarioLogado) {
    void inject(Router).navigate(['/', 'home', 'login'], { queryParams: { returnUrl: state.url } });
  }
  return usuarioLogado;
};
