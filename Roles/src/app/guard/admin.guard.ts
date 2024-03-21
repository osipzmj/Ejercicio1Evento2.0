// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { UsersService } from '../services/users.service';  // Importa tu servicio de autenticación si lo tienes

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {

//   constructor(private _userService: UsersService, private router: Router) {}

//   canActivate(): boolean {
//     const role = this._userService.getRole();
//     if (role === '') {
//       return true;
//     } else {
//       this.router.navigate(['/']);
//       return false;
//     }
//   }
// }
