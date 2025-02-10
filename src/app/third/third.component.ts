import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray,FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-third',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  form: FormGroup;

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
      unitprice:['', Validators.required],
      totalsum: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addUnit(): void {
    this.units.push(this.createUnit());
  }

  removeUnit(index: number): void {
    this.units.removeAt(index);
  }

  get totalPrice(): number {
    return this.units.controls.reduce(
      (sum, unit) => sum + (unit.get('totalSum')?.value || 0),
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

  submit(): void {
    if (this.form.valid) {
      console.log('Form Data:', this.form.getRawValue());
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }


}
