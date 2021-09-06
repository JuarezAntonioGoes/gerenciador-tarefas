import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css'],
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa: NgForm;

  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id, nome, concluida } = this.listar();
    this.tarefa = new Tarefa(id, nome, concluida);
    console.log(this.tarefa);
  }

  listar(): Tarefa {
    let id: number;
    this.route.params.subscribe((param) => (id = parseInt(param['id'])));

    if (!id) {
      this.router.navigate(['/tarefas']);
    }

    return this.tarefaService.buscarPorId(id);
  }

  atualizar() {
    if (this.formTarefa.form.valid) {
      
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
