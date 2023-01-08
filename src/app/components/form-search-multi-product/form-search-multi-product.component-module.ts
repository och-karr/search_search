import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSearchMultiProductComponent } from './form-search-multi-product.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatListModule, CommonModule, MatInputModule ],
  declarations: [FormSearchMultiProductComponent],
  providers: [],
  exports: [FormSearchMultiProductComponent]
})
export class FormSearchMultiProductComponentModule {
}
