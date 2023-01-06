import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-search-multi-product',
  styleUrls: ['./form-search-multi-product.component.scss'],
  templateUrl: './form-search-multi-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchMultiProductComponent {
  readonly searchForm: FormGroup = new FormGroup({ title: new FormControl() });


}
