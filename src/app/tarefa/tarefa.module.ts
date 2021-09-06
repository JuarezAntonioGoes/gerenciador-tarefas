import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService],
})
export class TarefaModule {}
