import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MismonedasComponent } from './mismonedas.component';

describe('MismonedasComponent', () => {
  let component: MismonedasComponent;
  let fixture: ComponentFixture<MismonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MismonedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MismonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
