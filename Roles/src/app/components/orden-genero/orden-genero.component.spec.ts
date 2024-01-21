import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenGeneroComponent } from './orden-genero.component';

describe('OrdenGeneroComponent', () => {
  let component: OrdenGeneroComponent;
  let fixture: ComponentFixture<OrdenGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
