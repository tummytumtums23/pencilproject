import { Component, OnInit } from '@angular/core';
import { UserinputService } from '../userinput.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import  {User}  from  'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
// import { map, catchError } from 'rxjs/operators';
import { fabric } from 'fabric';
import { CrayonBrush } from 'fabric-brush';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
	canvas:any;
	user = firebase.auth().currentUser;
	uid= this.user.uid;
	linkColor = {
		value: 'rgb(100,0,50)'
	}
	  //priorvalue;
 		// protected _canvas?: fabric.Canvas;
  	// 	protected _mouseUp: (evt: fabric.IEvent) => void;
  constructor(public userInputService: UserinputService, private angularFirestore: AngularFirestore) {
   // this.userInputForm = this.formBuilder.group({
   //    text: ['']

   //  })       
}

  ngOnInit(): void {
  	this.canvas = new fabric.Canvas('canvas',{isDrawingMode:true});
  	
  	
  	var freeDrawingBrush =  new fabric.PencilBrush();

  	freeDrawingBrush.color = 'rgb(255, 0, 0)';
  	console.log(freeDrawingBrush.color)
  	  } 		 

setColor(newColor) {
  console.log('value', newColor);
  //console.log(this.linkColor);
  var freeDrawingBrush =  new fabric.PencilBrush();
  //this.canvas.freeDrawingBrush = new CrayonBrush(this.canvas);

  	//this.canvas.freeDrawingBrush.changeColor(newColor);
    // freeDrawingBrush.color = 'rgb(50, 0, 0)';
  
}
  
//   reload(){
// let chartData;
//   	this.userInputService.getUserText(this.uid).toPromise().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }



 onSubmit() {
 	
 	this.angularFirestore.collection('userinput').doc(this.uid).get().toPromise()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
        		// this.userInputService.updateText(this.userInputForm.value, this.uid);
        		// console.log(this.uid);
        		// console.log(this.userInputForm.value);
        }
        else{
        	// this.userInputService.setCanvas(this.userInputForm.value, this.uid);
        }
      });
 	
   
   };
}

