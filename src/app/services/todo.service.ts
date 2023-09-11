import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl : string ="https://localhost:7097";

  constructor( private http:HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://localhost:7097/api/Todo');

  }
}
