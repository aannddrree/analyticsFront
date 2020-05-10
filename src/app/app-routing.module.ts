import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ControleContaComponent} from './controle-conta/controle-conta.component'
import {ControleBancoComponent} from './controle-banco/controle-banco.component'
import { AjudaComponent } from './ajuda/ajuda.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full'},
  {path: 'app-login', component:LoginComponent},
  {path: 'app-cadastro', component:CadastroComponent},
  {path: 'app-controle-conta', component: ControleContaComponent},
  {path: 'app-controle-banco', component: ControleBancoComponent},
  {path: 'app-ajuda', component: AjudaComponent},
  {path: 'app-principal', component: PrincipalComponent},
  {path: 'app-principal', component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
