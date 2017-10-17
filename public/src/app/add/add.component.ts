import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _triviaService: TriviaService,
    private _router: Router) { }

  ngOnInit() {
  }

  newQ = new Question();

  onSubmit(){
    console.log(this.newQ);
    this._triviaService.addQ(this.newQ);
    this.newQ = new Question;
    this._router.navigate(['/home']);
  }

  cancel(){
    this.newQ = new Question;
    this._router.navigate(['/home']);
  }
}
