import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bar } from '../shared/bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BarService } from '../shared/bar.service';

@Component({
  selector: 'app-bar-new',
  templateUrl: './bar-new.component.html',
  styleUrls: ['./bar-new.component.css']
})
export class BarNewComponent implements OnInit {

  pageTitle = 'Nuevo Bar';
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
    this.barId = parseInt(this.activatedroute.snapshot.params['barId']);
  }

  saveBar(): void {
    if (this.barForm.valid) {
      if (this.barForm.dirty) {
        this.bar = this.barForm.value;
        this.bar.id = this.barId;
        
        this.barService.createBar(this.bar)
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
