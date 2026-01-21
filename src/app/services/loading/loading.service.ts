import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _requests = signal(new Set<string>());
  public loading = computed<boolean>(() => this._requests().size > 0);

  public addRequest(requestUrl: string) {
    this._requests.update((r) => {
      r.add(requestUrl);
      return new Set(r);
    });
  }

  public removeRequest(requestUrl: string) {
    this._requests.update((r) => {
      r.delete(requestUrl);
      return new Set(r);
    });
  }
}
