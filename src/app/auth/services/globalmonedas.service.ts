import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class GlobalmonedasService {
  private baseAPI = `http://localhost:1000/api/`;
  private token: string = '';
  usuario: string = '';
  idusuario: number = 0;
  constructor(private http: HttpClient) {}

  getToken(token: any) {
    console.log(token);
    this.token = token;
  }

  autenticacionUsuario(usuario: any): Observable<any> {
    let url = `${this.baseAPI}autenticacion/`;
    return this.http.post<any>(url, usuario);
  }

  getMonedas(): Observable<any> {
    let url = `${this.baseAPI}cryptouser/`;
    return this.http.get<any>(url);
  }

  getMonedasUsuario(data: any): Observable<any> {
    let url = `${this.baseAPI}cryptouser/${data}`;
    return this.http.get<any>(url, {
      "headers": {
        "Authorization": `Bearer ${this.token}`
      }
    });
  }

  postMonedasUsuario(data: any): Observable<any> {
    console.log(this.token);
    let url = `${this.baseAPI}cryptouser/${data.idusuario_monedas}`;
    return this.http.post<any>(url, data, {
      "headers": {
        "Authorization": `Bearer ${this.token}`
      }
    });
  }

  editarMonedasUsuario(data: any): Observable<any> {
    console.log(this.token);
    let url = `${this.baseAPI}cryptouser/${data.idusuario_monedas}`;
    return this.http.put<any>(url, data, {
      "headers": {
        "Authorization": `Bearer ${this.token}`
      }
    });
  }

  borrarMonedaUsuario(data: any): Observable<any> {
    console.log(this.token);
    let url = `${this.baseAPI}cryptouser/${data}`;
    return this.http.delete<any>(url, {
      "headers": {
        "Authorization": `Bearer ${this.token}`
      }
    });
  }
}
