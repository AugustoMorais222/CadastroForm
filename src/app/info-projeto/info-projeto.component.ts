import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-projeto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div>
      <h2>Sobre o Projeto</h2>
      <p>Esta aplicação gerencia alunos usando Angular e rotas.</p>
      <a routerLink="/formulario">Voltar ao Cadastro</a>
    </div>
  `,
})
export class InfoProjetoComponent {}
