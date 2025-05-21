import {  HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { token } from "../stores/auth.store";
import { Observable } from "rxjs";

export const authInterceptor : HttpInterceptorFn = (req:HttpRequest<any>, next:HttpHandlerFn) => {
    const authToken = token();

    if(!authToken) return next(req);

    const requestConToken = req.clone({setHeaders:{
        Authorization: `Bearer ${authToken}`,
    }})


    return next(requestConToken);
}