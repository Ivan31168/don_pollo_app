import { computed, signal } from "@angular/core";

const loadPayloadFromLocalStorage = (): any | null =>{
    const data = localStorage.getItem("user_payload");
    return data ? JSON.parse(data) : null;
}

const _userPayload = signal<any | null>(loadPayloadFromLocalStorage());

export const userPayload = computed(() => _userPayload());

export const setUserPayload = (payload: any | null)=>{
    //Colocar el payload en un signal local
    _userPayload.set(payload);

    if(payload){
        localStorage.setItem("user_payload", JSON.stringify(payload));
        
    } else {
        localStorage.removeItem("user_payload");    
    }
    
};
