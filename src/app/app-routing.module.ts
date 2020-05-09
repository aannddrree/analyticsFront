import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ControleContaComponent} from './controle-conta/controle-conta.component'
import {ControleBancoComponent} from './controle-banco/controle-banco.component'

const routes: Routes = [
  {path: 'app-controle-conta', component: ControleContaComponent},
  {path: 'app-controle-banco', component: ControleBancoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
