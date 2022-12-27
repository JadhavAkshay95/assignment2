import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCandidateDialogComponent } from './add-candidate-dialog/add-candidate-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [AppComponent, AddCandidateDialogComponent, EmpListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
