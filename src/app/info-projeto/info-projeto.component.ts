import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-info-projeto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div>
      <h2>Sobre o Projeto</h2>
      <p>Esta aplicação gerencia alunos usando Angular e rotas.</p>
      <a routerLink="/formulario">Voltar ao Cadastro</a>

      <h3>Alunos cadastrados:</h3>
      <ul *ngIf="alunos.length > 0; else vazio">
        <li *ngFor="let aluno of alunos">{{ aluno }}</li>
      </ul>
      <ng-template #vazio>
        <p>Nenhum aluno cadastrado ainda.</p>
      </ng-template>
    </div>
  `,
})
export class InfoProjetoComponent implements OnInit {
  alunos: string[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.alunoService.alunos$.subscribe(lista => {
      this.alunos = lista;
    });
  }
}
