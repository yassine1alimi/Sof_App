import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Todo } from '../modals/todo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',
})
}



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: Todo = new Todo();

  private baseUrl = 'http://localhost:8087';  

  constructor(private http:HttpClient) { }

  public getTodos(){
    return this.http.get<any>(this.baseUrl + '/todos/',httpOptions);
     
  }

  createTodo(todoData: Todo) {
    return this.http.post(this.baseUrl + '/todos/', todoData);
    todoData.completed=false;
      
  }


  /*updateTodo(todoData: Todo)  {
    return this.http.put(this.baseUrl + '/todos/' + todoData.id, todoData);
      
  }*/

  deleteTodo(id: number) {
    return this.http.delete(this.baseUrl + '/todos'+'/' + id);
      
  }

  comletedTodo(id:number) {
    return this.http.get("http://localhost:8087/completed/"+id,httpOptions);
  }

  public updateTodo(todo:Todo) {
    return this.http.put("http://localhost:8087/todo",todo);
  }

  setter(todo:Todo){
    this.todo= todo;
  }

 getter(){
   return this.todo;
 }

}
