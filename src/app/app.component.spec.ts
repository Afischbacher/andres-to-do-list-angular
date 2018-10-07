import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EditToDoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { AddToDoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ToDoService } from '../core/services/todo-service';

// Tests the functionality of the AppComponent
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [ToDoService]
    }).compileComponents();
  }));
  
  // Expect the test to be truthy when creating the component
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
