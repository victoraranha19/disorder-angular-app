import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { ThemeService } from '../../services/theme/theme.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [RouterLink, MatSidenavModule, MatButtonModule, MatDividerModule, MatListModule, MatIconModule],
  providers: [ThemeService],
})
export class MenuComponent {
  #router = inject(Router);
  #theme = inject(ThemeService);
  #usuarioService = inject(UsuariosService);

  usuarioLogado = computed<boolean>(() => this.#usuarioService.usuarioLogado());

  toggleTheme() {
    this.#theme.toggleTheme();
  }

  irParaLogin() {
    if (this.usuarioLogado()) {
      this.#usuarioService.deslogar();
      this.#router.navigate(['/', 'login']);
    }
  }
}
