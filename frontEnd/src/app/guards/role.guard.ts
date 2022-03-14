import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    const expectedRole = route.data.expectedRole;
    const token:any = localStorage.getItem('token');

    const decodeToken:any = decode(token);
    console.log(decodeToken.userName);
    console.log(decodeToken.rolId);

    if(!this.authService.isAuth() || decodeToken.rolId !== expectedRole){
      console.log('Usuario no autorizado');
      return false;
    }
    return true;
  }
  
}
