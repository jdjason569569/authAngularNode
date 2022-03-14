import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:3002/user/'

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }


  login(user: any){
  return this.http.post(this.apiUrl+'singin',user);
  }

  isAuth(){
    const token: any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !token){
      return false;
    }
    return true;
  }

}
