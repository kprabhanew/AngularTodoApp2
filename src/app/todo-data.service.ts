// import { Injectable } from '@angular/core';
// import { Todo } from './todo';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoDataService {
//   private static _instance: TodoDataService = new TodoDataService();
//   lastId: number = 0;

//   private todos: Todo[] ;

//   constructor() {    
    
//     if (TodoDataService._instance) {
//       console.log('TodoDataService instance exist returning the existing instance');
//       return TodoDataService._instance;
//     }
//     console.log('Todo Constructor called');    
//     this.todos = [];
//    }

//   //Simulate Post /Todos
//   addTodo(todo: Todo): TodoDataService {
//     if (!todo.id) {
//       todo.id = ++this.lastId;
//     }
//     this.todos.push(todo);
//     return this;
//   }
//   //Simulate DELETE /todos/:id

//   deleteTodoById(id: number): TodoDataService{
//     this.todos = this.todos
//                       .filter(todo => todo.id !== id);
//     return this;
//   }

//   //Simulate PUT /todos/:id
//   updateTodoById(id: number, values: object = {}): Todo {
//     console.log('I am from update');
//     const todo = this.getTodoById(id);
//     if (!todo) {
//       return null;
//     }
//     Object.assign(todo, values);
//     return todo;
//   }

//   //Simulate GET / todos/:id
//   getTodoById(id: number): Todo{
//     return this.todos
//             .filter(todo => todo.id === id)
//             .pop();
//   }

//   //Toggle todo Complete
//   toggleTodoComplete(todo: Todo){
//     const updatedTodo = this.updateTodoById(todo.id, {
//       complete : !todo.complete
//     });
//     return updatedTodo;
//   }

//   //Simulate GET / todos
//   getAllTodos(): Todo[]{
//     return this.todos;
//   }

// }


// import { Injectable } from '@angular/core';
// import { Todo } from './todo';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoDataService {
//   private static _instance: TodoDataService = new TodoDataService();
//   lastId: number = 0;

//   private todos: Todo[] ;

//   constructor() {    
    
//     if (TodoDataService._instance) {
//       console.log('%cTodoDataService instance exist returning the existing instance');
//       return TodoDataService._instance;
//     }
//     console.log('%cTodoDataService Constructor called ' ,'background:#C9D908; color:#000');    
//     this.todos = [];
//    }

//   //Simulate Post /Todos
//   addTodo(todo: Todo) {
//     if (!todo.id) {
//       todo.id = ++this.lastId;
//     }
//     this.todos.push(todo);
//     console.log('%cTodoDataService ADD  called ' ,'background:#C9D908; color:#000',  this.todos);    
//   }
//   //Simulate DELETE /todos/:id

//   deleteTodoById(id: number){
//     this.todos = this.todos.filter(todo => todo.id !== id);
//     console.log('%cTodoDataService DELTEBYID  called' ,'background:#C9D908; color:#000', this.todos);    
//   }

//   //Simulate PUT /todos/:id
//   updateTodoById(id: number, values: object = {}) {
//     console.log('%cTodoDataService I am from update' ,'background:#C9D908; color:#000');
//     const mytodo = this.getTodoById(id);
//     if (!mytodo) {
//       return null;
//     }
//     console.log('Todo : ' + JSON.stringify(mytodo)  + " values : " +  JSON.stringify(values));
//     Object.assign(mytodo, values);
//     console.log('%cTodoDataService UDATEBYID : ' ,'background:#C9D908; color:#000' + JSON.stringify(mytodo)  + ' Id : ' + id);    
//     //return todo;
//   }

//   //Simulate GET / todos/:id
//   getTodoById(id: number): Todo{
// tslint:disable-next-line:max-line-length
//     console.log('%cTodoDataService GET BY ID Before POP :' ,'background:#C9D908; color:#000', JSON.stringify(this.todos) + ' Id : ' + id);
//     let popedTodo: Todo;
//     popedTodo = this.todos.filter(todo => todo.id === id).pop();
// tslint:disable-next-line:max-line-length
//     console.log('%cTodoDataService GET BY ID After POP :' ,'background:#C9D908; color:#000', JSON.stringify(popedTodo) + ' Id : ' + id);    
//     return popedTodo;
//   }

//   //Toggle todo Complete
//   toggleTodoComplete(todo: Todo){    
//     console.log('%cTodoDataService TOGGLE Before :' ,'background:#C9D908; color:#000', todo);
//     const updatedTodo = this.updateTodoById(todo.id, {
//       complete : !todo.complete
//     });
//     console.log('%cTodoDataService TOGGLE After  :' ,'background:#C9D908; color:#000', updatedTodo);
//     //return updatedTodo;
//   }

//   //Simulate GET / todos
//   getAllTodos(): Todo[]{
//     console.log('%cTodoDataService GET ALL After  :' ,'background:#C9D908; color:#000', this.todos);
//     return this.todos;
//   }

// }


import {Injectable} from "@angular/core";
import {Todo} from "./todo";

@Injectable()
export class TodoDataService {
  lastId: number = 0;
  private todos: Todo[] = [];
  
  constructor(){}

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id){
      todo.id = ++this.lastId;
    }
    
    this.todos.push(todo);
    return this;
  }
  
  updateTodoById(id: number, values: object = {}): Todo{
    const todo = this.getTodById(id);
    if (!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;    
  }

  getTodById(id: number): Todo{
    return this.todos.filter(todo => todo.id === id).pop();
  }

  deleteTodoById(id: number){
    this.todos =  this.todos.filter(todo => todo.id !== id);
    console.log(this);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

}
