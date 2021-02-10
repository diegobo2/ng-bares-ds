import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Bar } from '../shared/bar';
import { BarService } from '../shared/bar.service';

@Component({
  templateUrl: './bar-edit.component.html'
})
export class BarEditComponent implements OnInit{

  pageTitle = 'Bar Edit';
  errorMessage: string;
  barForm: FormGroup;

  barId:number;
  bar: Bar;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private barService: BarService) {  }

  ngOnInit(): void {
    this.barForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      menu: '',
      rating: '',
      description: '',
      shortDescription: '',
      image: ''
    });

    // Read the bar Id from the route parameter
    this.barId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getBar(this.barId);
  }

  getBar(id: number): void {
    this.barService.getBarById(id)
      .subscribe(
        (bar: Bar) => this.displayBar(bar),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayBar(bar: Bar): void {
    if (this.barForm) {
      this.barForm.reset();
    }
    this.bar = bar;
    this.pageTitle = `Edit Bar: ${this.bar.title}`;

    // Update the data on the form
    this.barForm.patchValue({
      title: this.bar.title,
      rating: this.bar.rating,
      description: this.bar.description,
      shortDescription: this.bar.shortDescription,
      menu: this.bar.menu,
      image: this.bar.image
    });
  }

  deleteBar(): void {
    if (this.bar.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the bar: ${this.bar.title}?`)) {
        this.barService.deleteBar(this.bar.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveBar(): void {
    if (this.barForm.valid) {
      if (this.barForm.dirty) {
        this.bar = this.barForm.value;
        this.bar.id = this.barId;
        
        this.barService.updateBar(this.bar)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
        );
      
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.barForm.reset();
    this.router.navigate(['']);
  }
}
