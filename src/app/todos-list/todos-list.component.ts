import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TodosListInterface} from "../todos.interface";
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit{
  todos$: Observable<TodosListInterface> | undefined;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.getTodos();
  }
}
