import { inject, Injectable } from '@angular/core';
import { ITransacao } from '../shared/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL_BASE } from '../shared/constants';

@Injectable({ providedIn: 'root' })
export class TransacoesService {
  private readonly ROTA_TRANSACOES = '/transacoes';

  #httpClient = inject(HttpClient);

  listar$(params: IRequestTransacaoListagem, tipoTransacao: 'entradas' | 'saidas') {
    const parametros: HttpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      const value = params[key as keyof IRequestTransacaoListagem];
      if (value) parametros.set(key, value);
    });
    return this.#httpClient.get<ITransacao[]>(`${API_URL_BASE}${this.ROTA_TRANSACOES}/${tipoTransacao}`, { params: parametros });
  }
  criar$(transacao: Omit<ITransacao, 'id'>) {
    return this.#httpClient.post<ITransacao>(`${API_URL_BASE}${this.ROTA_TRANSACOES}`, transacao);
  }
  editar$(transacao: ITransacao) {
    return this.#httpClient.put<ITransacao>(`${API_URL_BASE}${this.ROTA_TRANSACOES}/${transacao.id}`, transacao);
  }
  remover$(id: number) {
    return this.#httpClient.delete<null>(`${API_URL_BASE}${this.ROTA_TRANSACOES}/${id}`);
  }
}

interface IRequestTransacaoListagem {
  pagina: number;
  itensPorPagina: number;
  mesAno: string;
  carteiraId?: number;
  categoriaId?: number;
}
