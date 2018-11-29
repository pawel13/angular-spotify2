import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { distinctUntilChanged, filter, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm: FormGroup;

  constructor() {
    this.queryForm = new FormGroup({
      query: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    console.log(this.queryForm);

    this.queryForm.get('query')!.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(query => query.length >= 3),
      )
      .subscribe(query => {
        this.search(query);
      })
  }

  ngOnInit() {
  }

  @Output()
  queryChange = new EventEmitter<string>();

  search(query: string) {
    this.queryChange.emit(this.queryForm.controls.query.value);
  }

}
