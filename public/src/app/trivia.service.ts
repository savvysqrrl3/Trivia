import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class TriviaService {

  currentUser;
  QList = [];
  GameList = [];
  ThreeQs = [];
  ThreeQObserver = new BehaviorSubject(this.ThreeQs);
  
  userObserver = new BehaviorSubject(this.currentUser);
  Observer = new BehaviorSubject(this.QList);
  Observer2 = new BehaviorSubject(this.GameList);
  
  constructor(private _http: Http) { }

  // saveUser(username){
  //   console.log("Arrived at service and name is:", username)
  //   this.currentUser = username;
  //   console.log(this.currentUser);
  // }
  // end of saveUser

  addQ(newQ){
    console.log("Arrived at service and data is", newQ)
  this._http.post('/question', newQ)
  .subscribe(
    (response) => {
      console.log("returned to Angular service");
      this.retrieveAllQs();
    },
    (err) => {
      console.log("failed to add item", err)
    }
  )  
  }
  // end of addQ function

  getThreeQs(){
    return this._http.get('/getThree')
    .subscribe (
      (response) => {
        console.log("TriviaService - getThreeQs", response.json() );
        this.ThreeQs = response.json();
        // console.log(this.ThreeQs);
        this.ThreeQObserver.next(this.ThreeQs);
      },
      (err) => {
        console.log("failed to retrieve three ", err.json )
      }
    )
  }

  retrieveAllQs() {
    return this._http.get('/listquestions')
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.QList = response.json();
        this.Observer.next(this.QList);
      },
      (err) => {
        console.log("failed to retrieve all", err.json )
      }
    )
  }
// end of retrieveAllQs function

  addGame(newGame){
    console.log("Arrived at service and data is", newGame)
  this._http.post('/game', newGame)
  .subscribe(
    (response) => {
      console.log("returned to Angular service");
      this.retrieveAllGames();
    },
    (err) => {
      console.log("failed to add item", err)
    }
  )  
  }
// end of addGame function

retrieveAllGames() {
  return this._http.get('/listgames')
  .subscribe (
    (response) => {
      console.log("success at retrieveAllGames", response.json() );
      this.GameList = response.json();
      this.Observer2.next(this.GameList);
    },
    (err) => {
      console.log("failed to retrieve all", err.json )
    }
  )
}
// end of retrieveAllGames function




// this is the closing brace for export class; don't overwrite!
}
