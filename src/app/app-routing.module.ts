import { HeaderComponent } from './components/template/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import{VoluntariosComponent} from './views/voluntarios/voluntarios.component';
import{TopComponent} from './views/top/top.component';
import { CadastroCreateComponent } from './components/cadastro-create/cadastro-create.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"voluntarios",
  component: VoluntariosComponent
},
{
  path:"top",
  component: TopComponent
},
{
  path:"cadastro-create",
  component: CadastroCreateComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
