import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { MismonedasComponent } from './pages/mismonedas/mismonedas.component';
import { ListamonedasComponent } from './pages/listamonedas/listamonedas.component';
import { VentanamonedasComponent } from './pages/ventanamonedas/ventanamonedas.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'Mismonedas', component: MismonedasComponent },
      { path: 'Listamonedas', component: ListamonedasComponent },
      { path: 'Agregarmoneda', component: VentanamonedasComponent },
      { path: '**', redirectTo: 'Mismonedas' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
