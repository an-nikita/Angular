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
      street: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      units: this.fb.array([this.createUnit()])
    });
  }

  get units(): FormArray {
    return this.form.get('units') as FormArray;
  }


  ngOnInit(): void {
     this.trackTotalPrice();
      //this.loadData();
  }

  

  createUnit(): FormGroup {
    return this.fb.group({
      unitName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      totalPrice: [{ value: 0, disabled: true }]
    });
  }

  addUnit(): void {
    const unitGroup = this.createUnit();
    this.units.push(unitGroup);
     this.trackTotalPriceForUnit(unitGroup);
  }

  removeUnit(index: number): void {
    this.units.removeAt(index);
  }

  trackTotalPrice(): void {
    this.units.controls.forEach((unit) => {
      this.trackTotalPriceForUnit(unit as FormGroup);
    });
  }

  trackTotalPriceForUnit(unit: FormGroup): void {
    unit.get('quantity')?.valueChanges.subscribe(() => this.updateTotalPrice(unit));
    unit.get('unitPrice')?.valueChanges.subscribe(() => this.updateTotalPrice(unit));
  }

  updateTotalPrice(unit: FormGroup): void {
    const quantity = unit.get('quantity')?.value || 0;
    const unitPrice = unit.get('unitPrice')?.value || 0;
    const totalPrice = quantity * unitPrice;
    unit.get('totalPrice')?.setValue(totalPrice);
  }


  // load data on localstroge
  // onSubmit(): void {

  //   if (this.form.valid) {
  //     // const formData = this.form.value;



  //      const formData = this.form.getRawValue();
  //      this.submittedData.push(formData);
  //      localStorage.setItem('submittedData', JSON.stringify(this.submittedData));
  //      this.form.reset();
  //      this.units.clear();
  //      this.addUnit();
  //    }
  //  }
 
  //  loadData(): void {
  //    const storedData = localStorage.getItem('submittedData');
  //    if (storedData) {
  //      this.submittedData = JSON.parse(storedData);
  //    }
  //  }




  editEntry(index: number): void {
    this.editIndex = index;
    const data = this.submittedData[index];
    this.form.patchValue({
      companyName: data.companyName,
      country: data.country,
      street: data.street,
      city: data.city,
      pincode: data.pincode
    });
   // Clear and repopulate units
    this.units.clear();
  
    data.units.forEach((unit: any) => {
      const unitGroup = this.createUnit();
      unitGroup.patchValue(unit);
      this.units.push(unitGroup);

      this.updateTotalPrice(unitGroup);  // **Recalculate total price**
      this.trackTotalPriceForUnit(unitGroup);
    });
  }
  


  deleteEntry(index: number): void {
    this.submittedData.splice(index, 1);
    localStorage.setItem('submittedData', JSON.stringify(this.submittedData));
  }

  editIndex: number | null = null;
  
  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
  
      if (this.editIndex !== null) {

        // Update existing entry
        this.submittedData[this.editIndex] = formData;
        this.editIndex = null;
      } else {

        // Add new entry
        this.submittedData.push(formData);
      }
  
      localStorage.setItem('submittedData', JSON.stringify(this.submittedData));
      this.form.reset();
      this.units.clear();
      this.addUnit();
    }
  }

 }