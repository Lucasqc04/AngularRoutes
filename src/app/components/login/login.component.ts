import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  senha: string = '';
  senhaVisivel: boolean = false;
  email: any;

  togglePasswordVisibility(senhaInput: HTMLInputElement): void {
    this.senhaVisivel = !this.senhaVisivel;
    senhaInput.type = this.senhaVisivel ? 'text' : 'password';
  }

  
  
}
