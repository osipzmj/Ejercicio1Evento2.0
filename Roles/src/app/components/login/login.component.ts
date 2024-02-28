import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(public userService: UsersService) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data: any) => {
      console.log(data);
    });
  }
}
