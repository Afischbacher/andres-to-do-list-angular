import { Component, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToDoService } from "../../core/services/todo-service";
import { ToDoItem } from "../../core/models/todo-item";

@Component({
    selector: 'edit-todo-dialog',
    templateUrl: './edit-todo-dialog.component.html',
    styleUrls: ['./edit-todo-dialog.component.css']
})

export class EditToDoDialogComponent {
    // Injects the mat dialog reference, the to do service and the data to edit the to do item
    constructor(public dialogRef: MatDialogRef<EditToDoDialogComponent>, 
        @Optional() @Inject(MAT_DIALOG_DATA) public data: ToDoItem, private toDoService : ToDoService){}
    
    // Closes the dialog 
    close(): void {
        this.dialogRef.close();
    }

    // Updates the to do item
    updateToDo(toDoItem: ToDoItem): void {

        // Subscribes to the observable
        this.toDoService.updateToDo(toDoItem).subscribe(response => {
            
            // Returns true to the parent component
            this.dialogRef.close(response);

        }, error => console.error(error));
    }
}