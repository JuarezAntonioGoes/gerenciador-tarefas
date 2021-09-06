import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './tarefa/editar-tarefa/editar-tarefa.component';
import { ListarTarefaComponent } from './tarefa/listar-tarefa/listar-tarefa.component';

export const routes: Routes = [
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
  },
  { path: '', redirectTo: 'tarefas/listar', pathMatch: 'full' },
  { path: 'tarefas', redirectTo: 'tarefas/listar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
