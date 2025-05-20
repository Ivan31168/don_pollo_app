import { Component, computed, effect, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';

type User = {edad:number,id:number}

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {

titulo:string = "Demo de Signal";
contador:                WritableSignal<number> = signal(0);
contadorDoble:                  Signal<number> = computed(() => this.contador() * 2);
contadorSoloLectura:            Signal<number> = this.contador.asReadonly();
contadorLinkedSignal:   WritableSignal<number> = linkedSignal(()=>this.contador() * 2);
usuario:                WritableSignal<User>        = signal({edad:0,id:311});

constructor() {
  effect(()=>{
    console.log("El valor del contador es: ",this.contador())
  });

  effect(()=>{
    console.log("El valor del contador es: ",this.contador())
  })

}

incrementarContador(){
  this.contador.update(valorPrevio=> valorPrevio + 1);
}

resetContador(){
  this.contador.set(0);
}

incrementarContadorLinkedSignal() {
  this.contadorLinkedSignal.update(previo => previo + 1)
}

resetContadorLinkedSignal(){
  this.contadorLinkedSignal.set(0);
}

setearEdad(){
  this.usuario.update(previo => ({...previo, edad:18}))
}

}
