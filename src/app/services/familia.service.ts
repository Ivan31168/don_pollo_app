import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API_BASE_URL } from "../tokens/api-base-url.token";
import { Observable } from "rxjs";
import { Familia } from "../model/familia";

@Injectable({providedIn: 'root'})
export class FamiliaService {

    private http = inject(HttpClient);          // ya se inyecta de esta forma desde la versión 14
    private baseURL = inject(API_BASE_URL);

    getAll(): Observable<Familia[]> {
        console.log(`${this.baseURL}/familias`);
        return this.http.get<Familia[]>(`${this.baseURL}/familias`);
    }    
}

