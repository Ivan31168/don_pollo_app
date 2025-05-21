import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API_BASE_URL } from "../tokens/api-base-url.token";
import { Observable } from "rxjs";
import { Familia } from "../model/familia";
import { PedidoDTO1 } from "../model/pedido-dto1";

@Injectable({providedIn: 'root'})
export class PedidoService {

    private http = inject(HttpClient);
    private baseURL = inject(API_BASE_URL);

    getAll(): Observable<PedidoDTO1[]> {
        return this.http.get<PedidoDTO1[]>(`${this.baseURL}/pedidos?view=dto1`);
    }    
}

