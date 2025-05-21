import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
private auth = inject(AuthService);
private username:string = "";
private password:string = "";

submit(){
  this.auth.login("u1","password").subscribe();
}


}
