import { Component, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToDoService } from "../../core/services/todo-service";
import { ToDoItem } from "../../core/models/todo-item";

@Component({
    selector: 'add-todo-dialog',
    templateUrl: './add-todo-dialog.component.html',
    styleUrls: ['./add-todo-dialog.component.css']
})

export class AddToDoDialogComponent {
    constructor(public dialogRef: MatDialogRef<AddToDoDialogComponent>, 
        @Optional() @Inject(MAT_DIALOG_DATA) public data: ToDoItem, private toDoService : ToDoService)
    {
    }
    
    // Variables for new todo item
    newToDoItem: ToDoItem;
    toDo: string;

    // Closes dialog
    close(): void {
        this.dialogRef.close();
    }

    // Adds a new todo item
    addToDo(): void {

        // Create new to do item and assign the to do value to the new ToDoItem instance
        this.newToDoItem = new ToDoItem();
        this.newToDoItem.ToDoItem = this.toDo;
        
        // Subscribes to an observable to create new to do
        this.toDoService.createToDo(this.newToDoItem).subscribe(response => {
                        
            // Returns true to the parent component
            this.dialogRef.close(response);

        }, error => console.error(error));
    }
}