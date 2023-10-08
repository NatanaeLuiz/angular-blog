import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'conteudo/:id',
    component:ConteudoComponent
  },
  {
    path:'pokemon',
    component:PokemonComponent
  },
  {
    path:'**', redirectTo:'' //Rota Coringa para redirecionar o usuario para a rota principal
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
