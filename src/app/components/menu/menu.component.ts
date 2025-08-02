import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [RouterLink, MatSidenavModule, MatButtonModule, MatDividerModule, MatListModule, MatIconModule],
  providers: [ThemeService],
})
export class MenuComponent {
  #theme = inject(ThemeService);
  toggleTheme() {
    this.#theme.toggleTheme();
  }
}
