import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {


  submittedData: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('submittedData');
    if (data) {
      this.submittedData = JSON.parse(data);
    }
  }

  patchForm(index: number): void {
    this.router.navigate(['/third', index]); // Navigate with index as param
  }
}


