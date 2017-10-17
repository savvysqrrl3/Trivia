import { Component } from '@angular/core';
import { TriviaService } from './trivia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _triviaService: TriviaService) { }
  title = 'app';
}
