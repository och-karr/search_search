import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, debounceTime, of, startWith, switchMap} from 'rxjs';
import {UniversityModel} from '../../models/university.model';
import {UniversityService} from '../../services/university.service';

@Component({
  selector: 'app-form-search-single-university',
  styleUrls: ['./form-search-single-university.component.scss'],
  templateUrl: './form-search-single-university.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchSingleUniversityComponent {
  readonly countryForm: FormGroup = new FormGroup({country: new FormControl()});
  readonly list$: Observable<UniversityModel[] | undefined> = this.countryForm.valueChanges.pipe(
    startWith({country: ''}),
    debounceTime(1000),
    switchMap((countryForm) =>
      !!countryForm.country
        ? this._universityService.getAllByCountry(countryForm.country) ?? of([])
        : of(undefined)
      )
    );

  constructor(private _universityService: UniversityService) {
  }
}
