import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Text } from 'src/app/text.model';	

@Injectable({
  providedIn: 'root'
})
export class UserinputService {

  constructor(private angularFirestore: AngularFirestore) { }
  getUserText(id) {
    return this.angularFirestore
    .collection('userinput')
    .get()
      }

  // getUserList() { 
  //   return this.angularFirestore
  //   .collection("user-collection")
  //   .snapshotChanges();
  // }
  setCanvas(blob: Blob, id){
  	 return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("userinput")
        .doc(id)
        .set(blob)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  // createText(text: Text) {
  //   return new Promise<any>((resolve, reject) =>{
  //     this.angularFirestore
  //       .collection("userinput")
  //       .add(text)
  //       .then(response => { console.log(response) }, error => reject(error));
  //   });
  // }

  // deleteText(text) {
  //   return this.angularFirestore
  //     .collection("user-collection")
  //     .doc(text.id)
  //     .delete();
  // }
  
  // updateText(text: Text, id) {
  //   return this.angularFirestore
  //     .collection("userinput")
  //     .doc(id)
  //     .update({
  //       text: text.text
  //     });
  // }
}
