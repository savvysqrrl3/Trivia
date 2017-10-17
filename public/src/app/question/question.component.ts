import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private _triviaService: TriviaService) { }

  ngOnInit() {
  }

}
