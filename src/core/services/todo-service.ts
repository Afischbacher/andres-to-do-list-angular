
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ToDoItem } from "../models/todo-item";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ToDoService {
    constructor(private http: HttpClient){}

    createToDo(toDoItem: ToDoItem): Observable<boolean> {
        return this.http.post<boolean>(`${environment.apiUrl}/ToDo/CreateToDo`, toDoItem);
    }

    getToDos(): Observable<ToDoItem[]>{
        return this.http.get<ToDoItem[]>(`${environment.apiUrl}/ToDo/GetToDos`);
    }
    
    updateToDo(toDoItem : ToDoItem): Observable<boolean> {
        return this.http.put<boolean>(`${environment.apiUrl}/ToDo/UpdateToDo`, toDoItem);
    }

    deleteToDo(id: number): Observable<boolean> {
        return this.http.delete<boolean>(`${environment.apiUrl}/ToDo/DeleteToDo/${id}`);
    }

}