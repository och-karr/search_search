import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {combineLatest, map, Observable, startWith} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-form-search-multi-product',
  styleUrls: ['./form-search-multi-product.component.scss'],
  templateUrl: './form-search-multi-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchMultiProductComponent {
  readonly searchForm: FormGroup = new FormGroup({title: new FormControl()});
  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.searchForm.valueChanges.pipe(startWith({title: ''}))
  ]).pipe(
    map(([products, searchForm]) => products.filter((product) =>
      searchForm.title ?
        product.title.toLowerCase().includes(searchForm.title.toLowerCase()) ||
        (product.price).toString().toLowerCase().includes(searchForm.title.toLowerCase())
        : []
    ))
  );

  constructor(private _productService: ProductService) {
  }
}
