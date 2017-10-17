import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questions = [];
  username;
  game = {
    score: 0,
    percentage: "",
    username: ""
  }
  

  constructor(private _triviaService: TriviaService, private _router: Router
  ) {
    this.username = this._triviaService.currentUser;
    console.log('GameComponent - this.username: ', this.username)


    this._triviaService.ThreeQObserver.subscribe((questions) => {

      console.log('GameComponent - ThreeQObserver Called ', questions)
      this.questions = questions;
      console.log("Back at the component...", this.questions);

    })

    this.getQs(); 
    
    
   }

  ngOnInit() {
  }
  
  getName(){
    return this._triviaService.currentUser;
  }
  
  getQs(){
    this._triviaService.getThreeQs();
  }

  cancel(){
    this.game = {score: 0, percentage: "", username: this.username};
    this._router.navigate(['/home']);
  }

  calculate(){
    this.game.username = this.username;
    for (let each of this.questions){
      if (each.answer == "c"){
        this.game.score ++
      }
    }
    if (this.game.score == 3){
      this.game.percentage = "100%"
    }
    if (this.game.score == 2){
      this.game.percentage = "66.66%"
    }
    if (this.game.score == 1){
      this.game.percentage = "33.33%"
    }
    if (this.game.score == 0){
      this.game.percentage = "0.0%"
    }
    console.log("Score:", this.game.score, "Percentage:", "Name:", this.game.percentage, this.game.username)
    this._triviaService.addGame(this.game);
    this.game = {score: 0, percentage: "", username: this.username};
    this._router.navigate(['/home'])
  }

// closing curly brace
}