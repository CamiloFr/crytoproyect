import { Component, OnInit } from '@angular/core';
import { GlobalmonedasService } from '../../services/globalmonedas.service';
import alert from 'sweetalert2';

@Component({
  selector: 'app-mismonedas',
  templateUrl: './mismonedas.component.html',
  styleUrls: ['./mismonedas.component.sass'],
})
export class MismonedasComponent implements OnInit {
  public Monedas: any[] = [];
  MisMonedas: any[] = [];
  ModalAgregarMoneda: boolean = false;
  ModalEditarDocumentos: boolean = false;
  MonedaSeleccionada: any = 1;
  Item: any;

  constructor(private GlobalmonedasService: GlobalmonedasService) {}

  ngOnInit(): void {
    if (this.GlobalmonedasService.usuario === '') {
      let usuario = {
        nombreusuario: 'anonimus',
        contraseña: 'anonimus123',
      };
      this.GlobalmonedasService.autenticacionUsuario(usuario).subscribe(
        (res) => {
          this.GlobalmonedasService.getToken(res);
          this.GlobalmonedasService.getMonedas().subscribe((res) => {
            this.Monedas = res.data;
          });
          this.GlobalmonedasService.getMonedasUsuario(
            usuario.nombreusuario
          ).subscribe((res) => {
            this.MisMonedas = res.data;
          });
        }
      );
    }
  }
  cerrarModalAgregarMoneda() {
    this.ModalAgregarMoneda = false;
  }
  abrirModalAgregarMoneda() {
    this.ModalAgregarMoneda = true;
  }
  modalEditarDocumentos(data: any) {
    this.Item = data;
    this.ModalEditarDocumentos = true;
  }
  cerrarModalEditarDocumentos() {
    this.ModalEditarDocumentos = false;
  }
  monedaSeleccionadaChange(value: any) {
    this.MonedaSeleccionada = value;
  }
  borrarMonedaCrypto(data: any) {
    this.GlobalmonedasService.borrarMonedaUsuario(
      data.idmonedausuario
    ).subscribe((res: any) => {
      alert.fire('Exito', 'La moneda fue removida');
      this.MisMonedas = this.MisMonedas.filter(
        (x) => x.idmonedausuario !== data.idmonedausuario
      );
    });
  }
  editarBitcoin() {
    this.ModalEditarDocumentos = false;
    if (this.MonedaSeleccionada === this.Item.idmonedausuario) {
      alert.fire('Error', 'Ingrese una moneda diferente');
      return;
    }
    let moneda = this.Monedas.filter(
      (x) => x.idmoneda === parseInt(this.MonedaSeleccionada)
    );
    console.log(this.MonedaSeleccionada, moneda)
    if (moneda.length > 0) {
      let usuario = {
        nombreusuario_monedas: this.GlobalmonedasService.usuario,
        idusuario_monedas: this.GlobalmonedasService.idusuario,
        simbolo: moneda[0].simbolo,
        nombremoneda: moneda[0].nombremoneda,
        pais: moneda[0].pais,
        tasacambio: moneda[0].tasacambio,
        simboloanterior: this.Item.simbolo,
      };
      if (this.GlobalmonedasService.usuario === '') {
        usuario = {
          ...usuario,
          nombreusuario_monedas: 'anonimus',
          idusuario_monedas: 1,
        };
      }
      this.GlobalmonedasService.editarMonedasUsuario(usuario).subscribe(
        (res) => {
          console.log(res);
          alert.fire('Exito', 'La moneda fue cambiada');
          this.MisMonedas = this.MisMonedas.map((x) => {
            console.log(x.simbolo, this.Item.simbolo);
            if (x.simbolo === this.Item.simbolo) {
              console.log("aca", moneda);
              return {
                ...x,
                simbolo: moneda[0].simbolo,
                nombremoneda: moneda[0].nombremoneda,
                pais: moneda[0].pais,
                tasacambio: moneda[0].tasacambio,
              };
            }
            return {
              ...x,
            };
          });
        },
        (error: any) => {
          if (error.error.mensaje) {
            alert.fire('Error', error.error.mensaje);
          }
        }
      );
    }
  }
  guardarBitcoin() {
    console.log(this.MonedaSeleccionada);
    let moneda = this.Monedas.filter(
      (data: any) => data.idmoneda === parseInt(this.MonedaSeleccionada)
    );
    if (moneda.length > 0) {
      let usuario = {
        nombreusuario_monedas: this.GlobalmonedasService.usuario,
        idusuario_monedas: this.GlobalmonedasService.idusuario,
        simbolo: moneda[0].simbolo,
        nombremoneda: moneda[0].nombremoneda,
        pais: moneda[0].pais,
        tasacambio: moneda[0].tasacambio,
      };
      if (this.GlobalmonedasService.usuario === '') {
        usuario = {
          ...usuario,
          nombreusuario_monedas: 'anonimus',
          idusuario_monedas: 1,
        };
      }
      this.GlobalmonedasService.postMonedasUsuario(usuario).subscribe(
        (res: any) => {
          console.log(res);
          alert.fire('Exito', 'La moneda fue asociada');
          this.MisMonedas = [...this.MisMonedas, res.data];
        },
        (error: any) => {
          if (error.error.mensaje) {
            alert.fire('Error', error.error.mensaje);
          }
        }
      );
    }
  }
}
