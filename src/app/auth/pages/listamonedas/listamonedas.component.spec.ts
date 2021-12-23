import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamonedasComponent } from './listamonedas.component';

describe('ListamonedasComponent', () => {
  let component: ListamonedasComponent;
  let fixture: ComponentFixture<ListamonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamonedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
