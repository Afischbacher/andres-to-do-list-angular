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
    constructor(public dialogRef: MatDialogRef<EditToDoDialogComponent>, 
        @Optional() @Inject(MAT_DIALOG_DATA) public data: ToDoItem, private toDoService : ToDoService)
    {
    }

    close(): void {
        this.dialogRef.close();
    }

    saveUpdate(toDoItem: ToDoItem): void {
        this.toDoService.updateToDo(toDoItem).subscribe(response => {
            
            this.dialogRef.close(response);

        }, error => console.error(error));
    }
}