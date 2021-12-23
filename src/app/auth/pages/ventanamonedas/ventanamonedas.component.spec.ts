import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanamonedasComponent } from './ventanamonedas.component';

describe('VentanamonedasComponent', () => {
  let component: VentanamonedasComponent;
  let fixture: ComponentFixture<VentanamonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanamonedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanamonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
