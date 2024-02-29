import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  usersService = inject(UsersService);
  router = inject(Router)

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.usersService.login(this.formulario.value);
    if(!response.error){
      localStorage.setItem('token-cursos', response.token);
      this.router.navigate(['/cursos']);
    }
  }
}
