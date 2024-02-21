import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   usuario!: string;
   senha!: string;
  private _router: any;

  constructor(private _loginService: LoginService, private router: Router){}

  fazerLogin(){
    this._loginService.login(this.usuario, this.senha);
    this._router.navigate(['/restrito/lista']);

    this._loginService.setMostraMenu(false)
  }

}
