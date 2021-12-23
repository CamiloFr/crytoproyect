import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module'


import { MainComponent } from './pages/main/main.component';
import { MismonedasComponent } from './pages/mismonedas/mismonedas.component';
import { ListamonedasComponent } from './pages/listamonedas/listamonedas.component';
import { VentanamonedasComponent } from './pages/ventanamonedas/ventanamonedas.component';



@NgModule({
  declarations: [
    MismonedasComponent,
    ListamonedasComponent,
    MainComponent,
    VentanamonedasComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
