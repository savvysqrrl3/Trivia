import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Game } from '../game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allGames = [];
  username: String;

  userPrompt(){
    
    while(this._triviaService.currentUser == "" || this._triviaService.currentUser == null){
      this._triviaService.currentUser = prompt("Please enter your name.");	
    }
  };
  

  constructor(private _triviaService: TriviaService, private _router: Router) {
    this._triviaService.Observer2.subscribe((games) => {
      console.log("Games:", games);
            this.allGames = games;
            console.log("Back at the component...", this.allGames);
      
          })
   }

  ngOnInit() {
    this.userPrompt(); 
    this._triviaService.retrieveAllGames();
    
  }
  
  startGame(){
    this._router.navigate(['/lets_play']);
  }
  
  


}
