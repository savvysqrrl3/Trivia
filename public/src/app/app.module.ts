import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TriviaService } from './trivia.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    GameComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
