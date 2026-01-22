import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [RouterLink, MatSidenavModule, MatButtonModule, MatDividerModule, MatListModule, MatIconModule],
})
export class MenuComponent {
  abrirMenu = input<boolean>(false);
  toggleTheme = output();

  #usuarioService = inject(UsuariosService);

  deslogar() {
    this.#usuarioService.deslogar(true);
  }
}
