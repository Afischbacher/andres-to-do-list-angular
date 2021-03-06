import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../core/services/todo-service';
import { ToDoItem } from '../core/models/todo-item';
import { pipe } from '@angular/core/src/render3/pipe';
import { MatDialog } from '@angular/material';
import { EditToDoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { AddToDoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // Inject the to do service and the material dialog service
  constructor(private toDoService : ToDoService, private matDialog: MatDialog){}

  toDoItems : ToDoItem[];
  title = "Andre's To Do List App";

  // Retrieve the collection of to do items on component initialization
  ngOnInit(): void {
    this.getToDoItems();
  }

  // Opens a material dialog to edit the to do item
  editToDo(toDoItem: ToDoItem): void {
    
     this.matDialog.open(EditToDoDialogComponent, {
       data: toDoItem,
       width: '50%'
     });
  }

  
  // Opens a material dialog to create a new to do item
  addToDo() : void {
    this.matDialog.open(AddToDoDialogComponent, {
      width: '50%'
    }).afterClosed().subscribe(response => {
      this.getToDoItems();
    })
  }

  // Deletes a to do item from the to do list
  deleteToDo(id: number): void {
    this.toDoService.deleteToDo(id).subscribe(response =>{
        
      this.getToDoItems();

    },error => console.log(error));
  }

  // Gets all of the current to do list items
  getToDoItems(): void {
    
    this.toDoService.getToDos().subscribe((items: ToDoItem[]) => {
    
      this.toDoItems = items;
      
    }, error => console.error(error));
  
  }
}
