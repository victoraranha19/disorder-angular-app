import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ICarteira } from '../shared/interfaces';

@Injectable({ providedIn: 'root' })
export class CarteirasService {
  private readonly URI_CARTEIRAS = '/assets/carteiras.json';

  #httpClient = inject(HttpClient);

  getCarteira() {
    return this.#httpClient.get<ICarteira[]>(this.URI_CARTEIRAS);
  }

  addCarteira(carteira: ICarteira) {
    return this.#httpClient.post<ICarteira>(this.URI_CARTEIRAS, carteira);
  }

  // editCarteira(carteira: ICarteira) {
  //   return this.#httpClient.patch<ICarteira>(`${this.URI_CARTEIRAS}/${carteira.id}`, carteira);
  // }

  // removeCarteira(carteira: ICarteira) {
  //   return this.#httpClient.delete<ICarteira>(`${this.URI_CARTEIRAS}/${carteira.id}`);
  // }
}
