import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoService } from '../core/services/todo-service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EditToDoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { MatDialogModule } from '@angular/material';
import { AddToDoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';

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
