import { Component, inject, OnInit, signal } from '@angular/core';
import { FamiliaService } from '../../services/familia.service';
import { Familia } from '../../model/familia';

@Component({
  selector: 'app-listado-familias',
  imports: [],
  templateUrl: './listado-familias.component.html',
  styleUrl: './listado-familias.component.css'
})
export class ListadoFamiliasComponent implements OnInit {

  private familiaServices = inject(FamiliaService);
  public familias = signal<Familia[]>([]);
  public error = signal<string | null>(null);

  ngOnInit() {

    this.familiaServices.getAll().subscribe({
      next: data => {
        this.familias.set(data);
        this.error.set(null);
      },
      error: err => {
        console.error(err);
        this.error.set('No se han podido cargar las familia!');
      }
    });

  }

}


