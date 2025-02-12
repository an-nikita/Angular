import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormGroup, FormControl,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  
  form: FormGroup;
  submittedData: any[] = []; 

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      country: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: [''],
      }),
      units: this.fb.array([]),
    });

    this.addUnit();
    this.patchDefaultValues();
   
  }

  get units(): FormArray {
    return this.form.get('units') as FormArray;
  }

  createUnit(): FormGroup {
    return this.fb.group({
      unitName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitprice: ['', Validators.required],
      totalsum: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addUnit(): void {
    const unit = this.createUnit();

    unit.valueChanges.subscribe((value) => {
      const total = (value.quantity || 0) * (value.unitprice || 0);
      unit.patchValue({ totalsum: total }, { emitEvent: false });
    });

    this.units.push(unit);
  }

  removeUnit(index: number): void {
    this.units.removeAt(index);
  }

  get totalPrice(): number {
    return this.units.controls.reduce(
      (sum, unit) => sum + (unit.get('totalsum')?.value || 0),
      0
    );
  }

  patchDefaultValues(): void {
    this.form.patchValue({
      country: 'Slovakia',
      address: {
        city: 'Nove Zamky',
        zip: '81101',
      },
    });
  }


  submit() {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
    
      const existingData = JSON.parse(localStorage.getItem('formData') || '[]');
  
      existingData.push(formData);
     
      localStorage.setItem('formData', JSON.stringify(existingData));
  
      alert('Form submitted successfully!');
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        this.submittedData = JSON.parse(savedData);
      }
      this.form.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  }
  
}