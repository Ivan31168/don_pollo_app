import { Token } from "@angular/compiler";
import { computed, signal } from "@angular/core";

const loadTokenFromLocalStorage = () : any | null =>{
    return localStorage.getItem("token");
}

const _token = signal<any | null>(loadTokenFromLocalStorage());

export const token = computed(() => _token());

export const clearToken = ()=>{
    _token.set(null);
    localStorage.removeItem("token");
}

export const setToken = (value: any | null)=>{
    _token.set(value);
    localStorage.setItem("token", value);
        
};
