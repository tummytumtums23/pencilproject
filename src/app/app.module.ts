import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authenticator/login/login.component';
import { RegisterComponent } from './authenticator/register/register.component';
import { ForgotPasswordComponent } from './authenticator/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authenticator/verify-email/verify-email.component';
import { TextinputComponent } from './textinput/textinput.component';

  var firebaseConfig = {
    apiKey: "AIzaSyDWgStIpyW0B1oz08GBR9zWCQF-_yCYzbw",
    authDomain: "pencilproject-e0af6.firebaseapp.com",
    projectId: "pencilproject-e0af6",
    storageBucket: "pencilproject-e0af6.appspot.com",
    messagingSenderId: "959492136709",
    appId: "1:959492136709:web:9171d46c1ef28453bee16c"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    TextinputComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
