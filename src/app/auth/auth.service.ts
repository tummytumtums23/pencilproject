import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import  {User}  from  'firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})	
export class AuthService {

	user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
  this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    }
    ) }
async  loginWithGoogle(){
	try{


    await  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}
catch(err){
	console.log(err);
   
}
 this.router.navigate(['textinput']);
}
async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    	
}
async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
}

}
