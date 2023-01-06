import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormSearchSingleUniversityComponent } from './components/form-search-single-university/form-search-single-university.component';
import { FormSearchSingleUniversityComponentModule } from './components/form-search-single-university/form-search-single-university.component-module';
import { UniversityServiceModule } from './services/university.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'search-universities', component: FormSearchSingleUniversityComponent }]), FormSearchSingleUniversityComponentModule, UniversityServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
