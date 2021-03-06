import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  listarTodos(): Tarefa[] {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();

    tarefas.forEach((obj, index, arr) => {
      if (obj.id === tarefa.id) {
        arr[index] = tarefa;
      }
    });

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((tarefa) => {
      if (tarefa.id === id) {
        tarefa.concluida = !tarefa.concluida;
      }
    });

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
}
