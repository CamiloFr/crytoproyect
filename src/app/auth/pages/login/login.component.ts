import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import alert from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  contraseña: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  usuarioSeleccionadaChange(value: string) {
    console.log(value);
    this.usuario = value;
  }

  contrasenaSeleccionadaChange(value: string) {
    console.log(value);
    this.usuario = value;
  }

  iniciarSesion() {
    if (this.usuario === '') {
      return this.gotoMisMonedas();
    }

    alert.fire('Error', 'Tendremos esta funcionalidad muy pronto');
    return;
  }

  gotoMisMonedas() {
    this.router.navigateByUrl('/auth/Mismonedas');
  }
}
