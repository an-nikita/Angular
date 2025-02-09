import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {



  registerForm = new FormGroup({
    fullName: new FormControl('', Validators. required),
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    acceptTerms: new FormControl(false, Validators.requiredTrue)
  });

 
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }




}
