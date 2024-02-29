
import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service'; 
import { FormControl, FormGroup } from '@angular/forms';

// import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent  {

  formulario: FormGroup;

  userService = inject(UsersService)

  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  async onSubmit(){
    const response = await this.userService.registro(this.formulario.value);
    console.log(response)
  }
}

