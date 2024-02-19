
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'; 

// import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent  {

  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  passwordError: boolean | undefined;

  constructor(public userService: UsersService) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe((data) => {
      console.log(data);
    });
  }
}

