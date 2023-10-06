import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmSenha: string = '';
  senhaVisivel: boolean = false;

  togglePasswordVisibility(senhaInput: HTMLInputElement): void {
    this.senhaVisivel = !this.senhaVisivel;
    senhaInput.type = this.senhaVisivel ? 'text' : 'password';
}
}