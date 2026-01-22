import { Component, computed, inject, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ThemeService } from '../../services/theme/theme.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, LoadingComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  #theme = inject(ThemeService);
  #loadingService = inject(LoadingService);
  #usuarioService = inject(UsuariosService);

  isLoading = computed<boolean>(() => this.#loadingService.loading());
  isUsuarioLogado = computed<boolean>(() => this.#usuarioService.isUsuarioLogado());

  ngOnInit() {
    this.#theme.loadTheme();
  }

  toggleTheme() {
    this.#theme.toggleTheme();
  }
}
