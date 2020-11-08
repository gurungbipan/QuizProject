import { Injectable } from '@angular/core';
import { detail } from './questions'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  questions(){
   return detail;

 }
}
