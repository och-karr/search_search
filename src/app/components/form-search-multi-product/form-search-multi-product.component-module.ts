import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSearchMultiProductComponent } from './form-search-multi-product.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [FormSearchMultiProductComponent],
  providers: [],
  exports: [FormSearchMultiProductComponent]
})
export class FormSearchMultiProductComponentModule {
}
