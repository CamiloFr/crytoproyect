import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MismonedasComponent } from './mismonedas.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MismonedasComponent', () => {
  let component: MismonedasComponent;
  let fixture: ComponentFixture<MismonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [MismonedasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MismonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Probando boton agregar monedas', () => {
    expect(component.abrirModalAgregarMoneda()).toBeTrue();
  });

  it('Probando boton editar monedas', () => {
    expect(component.modalEditarDocumentos({ idmoneda: 1 })).toBeTrue();
  });

});
