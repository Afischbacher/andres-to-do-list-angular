
// App Component
import { AppComponent } from './app.component';

// Core Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Services
import { ToDoService } from '../core/services/todo-service';

// Dialogs
import { AddToDoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { EditToDoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EditToDoDialogComponent,
    AddToDoDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [ToDoService],
  entryComponents: [EditToDoDialogComponent, AddToDoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
