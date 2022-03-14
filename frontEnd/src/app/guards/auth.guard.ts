import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }
  canActivate(): boolean{
    if(!this.authService.isAuth()){
      console.log('Token invalido o ya expiro');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
