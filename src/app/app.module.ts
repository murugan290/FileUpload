import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CSVProcessorService } from './csvprocessor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {  MatInputModule } from '@angular/Material';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CSVProcessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
