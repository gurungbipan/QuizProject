import { Component, Input, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {NgModule } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() out: any;
  correct: boolean;
  correct1: boolean;
  counter:number;
  

  constructor(private ser: DataService) { }

  ngOnInit(): void {
   
  }

  validate(opt,out, ans){
    this.correct = false;
    this.correct1 = false;
    this.counter = 0;

    if(opt == out.answer){
      this.correct = true
      this.counter =+1; 
    } else {
      this.correct1 = true;
    }
    

  }
  result():any{
    console.log("You scored" + this.counter)

  }
}
