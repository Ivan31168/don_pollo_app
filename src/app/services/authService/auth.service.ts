import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_BASE_URL } from '../../tokens/api-base-url.token';
import { setUserPayload } from '../../core/stores/user.store';
import { setToken } from '../../core/stores/auth.store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = inject(API_BASE_URL);

login(username:string,password:string):Observable<any>{

  return this.http.post(`${this.baseUrl}/donpollo/auth/signin`,{username, password}).pipe(
    tap((response:any)=> {
      setToken(response.token);
      
      const payloadBase64 = response.token.split(".")[1];
      const payloadDecoded = this.decodeBase64_UTF_8(payloadBase64)
      const payload = JSON.parse(payloadDecoded);

      setUserPayload(payload);
    })

  );
}

decodeBase64_UTF_8(base64:string):string {
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);

}

}
