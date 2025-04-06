import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/formulario">Cadastro</a>
      <a routerLink="/info">Sobre</a>
    </nav>
  `,
  styles: [`
    nav {
      background-color: #f5f5f5;
      padding: 1rem;
    }
    a {
      margin-right: 1rem;
      text-decoration: none;
      color: #333;
    }
  `]
})
export class HeaderComponent {}
