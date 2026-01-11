// src/app/services/theme.service.ts
import { inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

export type TTheme = 'theme-light' | 'theme-dark'; // Define os tipos de tema possíveis

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme'; // Chave para armazenar no localStorage
  private _themeLoaded = signal(false);

  currentTheme = signal<TTheme>('theme-light'); // Signal para o tema atual

  readonly #rendererFactory = inject(RendererFactory2);
  private renderer: Renderer2 = this.#rendererFactory.createRenderer(null, null);

  /**
   * Carrega o tema salvo no localStorage ou detecta a preferência do sistema.
   */
  public loadTheme(): void {
    if (this._themeLoaded()) return;
    const savedTheme = localStorage.getItem(this.THEME_KEY);

    if (savedTheme === 'theme-dark') {
      this.setTheme('theme-dark');
    } else if (savedTheme === 'theme-light') {
      this.setTheme('theme-light');
    } else {
      // Se não houver preferência salva, verifica a preferência do sistema
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setTheme('theme-dark'); // Aplica tema escuro se o sistema preferir
      } else {
        this.setTheme('theme-light'); // Aplica tema claro por padrão ou se o sistema preferir
      }
    }
    this._themeLoaded.set(true);
  }

  /**
   * Define o tema da aplicação.
   * @param theme 'light' ou 'dark'.
   */
  setTheme(theme: TTheme): void {
    this.renderer.removeClass(document.body, 'theme-light');
    this.renderer.removeClass(document.body, 'theme-dark');
    this.renderer.addClass(document.body, `${theme}`);
    this.currentTheme.set(theme);
    this._saveTheme(theme);
  }

  /**
   * Alterna entre o tema claro e escuro.
   */
  toggleTheme(): void {
    const isDarkMode = this.currentTheme() === 'theme-dark';
    if (isDarkMode) {
      this.setTheme('theme-light');
    } else {
      this.setTheme('theme-dark');
    }
  }

  /**
   * Salva a preferência do tema no localStorage.
   * @param theme 'light' ou 'dark'.
   */
  private _saveTheme(theme: TTheme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }
}
