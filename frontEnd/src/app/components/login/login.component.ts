import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceAuth: AuthService, private router: Router) { }

  user = {
    userName : '',
    pass: ''
  }

  ngOnInit(): void {
  }

  login(){
     this.serviceAuth.login(this.user).subscribe((response:any)=>{
       if(response.token){
        localStorage.setItem('token', response.token);
        this.router.navigate(['private']);
       }
     });
  }

}
