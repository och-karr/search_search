import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormSearchSingleUniversityComponent } from './components/form-search-single-university/form-search-single-university.component';
import { FormSearchMultiProductComponent } from './components/form-search-multi-product/form-search-multi-product.component';
import { FormSearchSingleUniversityComponentModule } from './components/form-search-single-university/form-search-single-university.component-module';
import { UniversityServiceModule } from './services/university.service-module';
import { FormSearchMultiProductComponentModule } from './components/form-search-multi-product/form-search-multi-product.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'search-universities', component: FormSearchSingleUniversityComponent }, { path: 'list-2-form-search-multi-products', component: FormSearchMultiProductComponent }]), FormSearchSingleUniversityComponentModule, UniversityServiceModule, FormSearchMultiProductComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
