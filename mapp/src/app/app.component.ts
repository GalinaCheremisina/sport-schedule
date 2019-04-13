import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private config = {
    apiKey: "AIzaSyCBL5OFAm49MbZjinS_AhuWjK7tMS5PU3I",
    authDomain: "fitness-app-15956.firebaseapp.com",
    databaseURL: "https://fitness-app-15956.firebaseio.com",
    projectId: "fitness-app-15956",
    storageBucket: "fitness-app-15956.appspot.com",
    messagingSenderId: "707736591557"
  };
  ngOnInit(){
    firebase.initializeApp(this.config);
  }
}
