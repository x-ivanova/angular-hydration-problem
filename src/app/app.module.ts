import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RandomTodoComponent} from "./random-todo/random-todo.component";
import {TodosListComponent} from "./todos-list/todos-list.component";
import {AppTitleComponent} from "./app-title/app-title.component";


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal' }),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    RandomTodoComponent,
    TodosListComponent,
    AppTitleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
