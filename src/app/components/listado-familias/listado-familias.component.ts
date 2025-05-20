import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Familia } from '../../model/familia';
import { JsonPipe } from '@angular/common';
import { FamiliaService } from '../../services/familiaService/familiaService';

@Component({
  selector: 'app-listado-familias',
  templateUrl: './listado-familias.component.html',
  styleUrl: './listado-familias.component.css'
})
export class ListadoFamiliasComponent {
familias: WritableSignal<Familia[] | null> = signal<Familia[] | null>(null);
private familiaServices = inject(FamiliaService);
error:WritableSignal<string | null> = signal<string | null>(null);

ngOnInit(){
this.familiaServices.getAll().subscribe({
  next: data=> {this.familias.set(data);
    this.error.set(null);
  },

  error: error => {
    console.error(error);
    this.error.set("No se han podido cargar las familias");
  }
})

}
}
