import { Component, OnInit } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {
    console.log("%c AppComponent Constructor ","background:#5F0466; color:#FFF",this.newTodo);
  }

  addTodo(){
    console.log("%c AddTodo ","background:#5F0466; color:#FFF",this.newTodo);
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo){
    console.log("%c toggleTodoComplete ","background:#5F0466; color:#FFF",todo);
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    console.log("%c removeTodo ","background:#5F0466; color:#FFF",todo);
    this.todoDataService.deleteTodoById(todo.id);
    console.log('Serv Return : ' + JSON.stringify(this.todoDataService.deleteTodoById(todo.id)));
  }

  get todos(){
    //console.log("%c getAllTodos ","background:#5F0466; color:#FFF");
    return this.todoDataService.getAllTodos();
  }
}
