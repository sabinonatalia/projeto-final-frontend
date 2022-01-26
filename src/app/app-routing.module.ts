import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'lista-cadastro', component:ListaCadastrosComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
