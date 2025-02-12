import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {



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
