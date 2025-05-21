import { JsonPipe } from '@angular/common';
import { Component, computed, effect, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';

@Component({
 selector: 'app-signal-demo',
  imports: [JsonPipe],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {

  titulo = 'Demo de Signal';

  contador:             WritableSignal<number> = signal(0);
  contadorDoble:                Signal<number> = computed(() => this.contador() * 2);
  contadorSoloLectura:          Signal<number> = this.contador.asReadonly(); 
  contadorLinkedSignal: WritableSignal<number> = linkedSignal(() => this.contador() * 2);

  // Ejemplo de unsignal que alberga un valor "complejo"

  usuario = signal({
    id: 200,
    edad: 17,
  });

  constructor() {

    effect(() => {
      console.log("El valor del contador es " + this.contador());
    });

    effect(() => {
      console.log("El VALOR del contadorLinkedSignal es " + this.contadorLinkedSignal());
    });

    effect(() => {
      console.log("La edad del usuario es " + this.usuario().edad);
    });

  }

  incrementarContador(){
    this.contador.update((valorPrevio) => valorPrevio + 1);
  }

  resetContador(){
    this.contador.set(0);
  }

  resetearContadorSoloLectura(){
    // this.contadorSoloLectura.set(200);
  }

  incrementarContadorLinkedSignal(){
    this.contadorLinkedSignal.update((valorPrevio) => valorPrevio +1 );
  }

  resetearContadorLinkedSignal(){
    this.contadorLinkedSignal.set(0);
  }

  cambiarEdadUsuario(){
    this.usuario.update((usuarioAntes) => ({ ...usuarioAntes, edad:18 }));
  }

}

/**
 * 💡 Convención recomendada para nombrar señales (signals) en Angular 19:
 *
 * ✅ Sin prefijos especiales:
 *    - Ejemplo: const count = signal(0);
 *    - Las signals son valores sincronizados y reactivos.
 *    - No necesitan notación especial como los Observables.
 *
 * ❌ No usar el prefijo '$':
 *    - Reservado para streams (Observable). Ej: user$ = this.http.get(...);
 *    - Usarlo en signals puede inducir a error.
 *
 * ❌ No usar el prefijo '&':
 *    - No está estandarizado ni reconocido por la comunidad Angular.
 *    - Puede generar confusión.
 *
 * ⚠️ Uso opcional del prefijo '_':
 *    - Útil para distinguir señales privadas dentro de una clase o servicio.
 *    - Ejemplo:
 *        private readonly _usuario = signal<Usuario | null>(null);
 *        public readonly usuario = this._usuario.asReadonly();
 *
 * ✅ Reglas prácticas:
 *    - Usa nombres normales si la signal es interna de un componente.
 *    - Usa `_nombre` para señales privadas y `nombre` para la pública de solo lectura.
 *    - No combines con `$` ni `&` para evitar ambigüedades.
 */
