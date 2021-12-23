import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MainComponent } from './pages/main/main.component';
import { MismonedasComponent } from './pages/mismonedas/mismonedas.component';
import { ListamonedasComponent } from './pages/listamonedas/listamonedas.component';
import { VentanamonedasComponent } from './pages/ventanamonedas/ventanamonedas.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    MismonedasComponent,
    ListamonedasComponent,
    MainComponent,
    VentanamonedasComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule],
  providers: [HttpClient],
})
export class AuthModule {}
