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

    newToDoItem: ToDoItem;
    toDo: string;

    close(): void {
        this.dialogRef.close();
    }

    addToDo(): void {
        this.newToDoItem = new ToDoItem();
        this.newToDoItem.ToDoItem = this.toDo;
        console.log(this.toDo);
        this.toDoService.createToDo(this.newToDoItem).subscribe(response => {
            
            this.dialogRef.close(response);

        }, error => console.error(error));
    }
}