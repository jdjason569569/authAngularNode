import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'private', component: PrivateComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent,canActivate: [RoleGuard] , data:{expectedRole: 'admin'}},  //Data: permite crear una metadata para el ingreso al componente
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
