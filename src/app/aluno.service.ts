import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunosSubject = new BehaviorSubject<string[]>([]);
  alunos$ = this.alunosSubject.asObservable();

  adicionar(nome: string) {
    const atual = this.alunosSubject.getValue();
    this.alunosSubject.next([...atual, nome]);
  }

  limpar() {
    this.alunosSubject.next([]);
  }
}
