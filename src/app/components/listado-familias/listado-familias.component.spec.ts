import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFamiliasComponent } from './listado-familias.component';

describe('ListadoFamiliasComponent', () => {
  let component: ListadoFamiliasComponent;
  let fixture: ComponentFixture<ListadoFamiliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoFamiliasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoFamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
