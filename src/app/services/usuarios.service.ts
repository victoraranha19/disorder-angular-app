import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first } from 'rxjs';
import { IUsuario } from '../shared/interfaces';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private readonly URI_USUARIOS = '/assets/usuarios.json';

  #httpClient = inject(HttpClient);

  getUsuarios() {
    return this.#httpClient.get<IUsuario[]>(this.URI_USUARIOS).pipe(first());
  }

  logar(): void {
    localStorage.setItem('login', 'sim');
  }
  deslogar(): void {
    localStorage.clear();
  }

  isUsuarioLogado = (): boolean => !!localStorage.getItem('login');
}
