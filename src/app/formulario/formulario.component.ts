import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../aluno.service';

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
    </div>
  `,
})
export class FormularioComponent {
  nome: string = '';

  constructor(private alunoService: AlunoService) {}

  salvar(): void {
    this.alunoService.adicionar(this.nome);
    this.nome = ''; 
  }
}

