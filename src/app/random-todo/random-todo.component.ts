import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TodoInterface} from "../todos.interface";
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-random-todo',
  templateUrl: './random-todo.component.html',
  styleUrls: ['./random-todo.component.css']
})
export class RandomTodoComponent implements OnInit {
  randomTodo$: Observable<TodoInterface> | undefined;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.randomTodo$ = this.todosService.getRandomTodo();
  }
}
