import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IUsuarioLogado, IUsuarioLogin, IUsuarioRegistro } from '../shared/interfaces';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { ROTAS_API } from '../shared/constants';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  public usuarioLogado = signal<boolean>(this._verificaUsuarioLogado());

  #httpClient = inject(HttpClient);

  public registrar$(usuario: IUsuarioRegistro): Observable<IUsuarioLogado> {
    return this.#httpClient.post(`${ROTAS_API}/register`, usuario).pipe(
      switchMap(() => this.logar$({ login: usuario.login, senha: usuario.senha })),
      catchError((err: Error) => {
        console.log(err);
        this.deslogar();
        return of({ token: '' });
      }),
      tap(() => this.usuarioLogado.set(this._verificaUsuarioLogado()))
    );
  }

  public logar$(usuario: IUsuarioLogin): Observable<IUsuarioLogado> {
    return this.#httpClient.post<IUsuarioLogado>(`${ROTAS_API}/login`, usuario).pipe(
      tap((usuarioLogado) => {
        localStorage.setItem('token', JSON.stringify(usuarioLogado));
      }),
      catchError((err) => {
        console.error(err);
        this.deslogar();
        return of({ token: '' });
      }),
      tap(() => this.usuarioLogado.set(this._verificaUsuarioLogado()))
    );
  }

  public deslogar(): void {
    localStorage.removeItem('token');
    this.usuarioLogado.set(this._verificaUsuarioLogado());
  }

  private _verificaUsuarioLogado() {
    return !!localStorage.getItem('token')?.length;
  }
}
