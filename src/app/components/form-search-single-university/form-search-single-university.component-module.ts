import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormSearchSingleUniversityComponent } from './form-search-single-university.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatListModule],
  declarations: [FormSearchSingleUniversityComponent],
  providers: [],
  exports: [FormSearchSingleUniversityComponent]
})
export class FormSearchSingleUniversityComponentModule {
}
