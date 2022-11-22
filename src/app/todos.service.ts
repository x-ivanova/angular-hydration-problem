import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoInterface, TodosListInterface} from "./todos.interface";
import {Observable, tap, map, of} from "rxjs";
import { makeStateKey, TransferState, StateKey } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private httpClient: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  getTodos(): Observable<TodosListInterface> {
    const key = makeStateKey<TodosListInterface>('allTodos');

    if (isPlatformBrowser(this.platformId)) {
      const cachedResponse = this.transferState.get<TodosListInterface>(key, { todos: [] });
      if (cachedResponse) {
        this.transferState.remove(key);
        return of(cachedResponse);
      } else {
        return this.loadTodos(key)
      }
    }

    return this.loadTodos(key);
  }

  private loadTodos(key: StateKey<TodosListInterface>): Observable<TodosListInterface>{
    return this.httpClient.get<TodosListInterface>('https://dummyjson.com/todos').pipe(
      map((response: TodosListInterface) => {
        if (isPlatformServer(this.platformId)) {
          this.transferState.set<TodosListInterface>(key, response);
        }
        return response;
      })
    )
  }

  getRandomTodo(): Observable<TodoInterface> {
    return this.httpClient.get<TodoInterface>('https://dummyjson.com/todos/random')
  }
}
