import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './authenticator/login/login.component';
import { RegisterComponent } from  './authenticator/register/register.component';
import { TextinputComponent } from  './textinput/textinput.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['']);
const redirectAuthenticated = () => redirectLoggedInTo(['textinput']);

const routes: Routes = [
  { path: '', component: LoginComponent,  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectAuthenticated } },
  { path: 'register', component: RegisterComponent },
  { path: 'textinput', component: TextinputComponent,  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectToLogin }}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
