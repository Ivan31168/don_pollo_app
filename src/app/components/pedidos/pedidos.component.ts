import { Component, inject, signal } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { PedidoDTO1 } from '../../model/pedido-dto1';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  imports: [JsonPipe],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  private pedidoService = inject(PedidoService);
  public pedidos = signal<PedidoDTO1[]>([]);
  public error = signal<string | null>(null);

  ngOnInit() {

    this.pedidoService.getAll().subscribe({
      next: data => {
        this.pedidos.set(data);
        this.error.set(null);
      },
      error: err => {
        console.error(err);
        this.error.set('No se han podido cargar los pedidos!');
      }
    });

  }
}
