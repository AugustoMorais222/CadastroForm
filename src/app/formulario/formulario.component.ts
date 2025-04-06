import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <h2>Cadastro de Alunos</h2>
      <input type="text" [(ngModel)]="nome" placeholder="Digite o nome do aluno" />
      <button (click)="salvar()">Salvar</button>
      <p>Valor digitado: {{ nome }}</p>

      <ul *ngIf="alunos.length > 0; else noAluno">
        <li *ngFor="let aluno of alunos">{{ aluno }}</li>
      </ul>
      <ng-template #noAluno>
        <p>Nenhum aluno cadastrado</p>
      </ng-template>
    </div>
  `,
})
export class FormularioComponent {
  nome: string = '';
  alunos: string[] = [];

  salvar(): void {
    if (this.nome.trim()) {
      this.alunos.push(this.nome);
      this.nome = '';
    }
  }
}
