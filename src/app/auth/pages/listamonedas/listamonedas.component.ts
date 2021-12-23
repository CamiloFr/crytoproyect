import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalmonedasService } from '../../services/globalmonedas.service';

@Component({
  selector: 'app-listamonedas',
  templateUrl: './listamonedas.component.html',
  styleUrls: ['./listamonedas.component.sass'],
})
export class ListamonedasComponent implements OnInit {
  public Monedas: any[] = [];

  constructor(
    private GlobalmonedasService: GlobalmonedasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GlobalmonedasService.getMonedas().subscribe((res) => {
      this.Monedas = res.data;
    });
  }

  gotoMisMonedas() {
    this.router.navigateByUrl('/auth/Mismonedas');
  }
}
