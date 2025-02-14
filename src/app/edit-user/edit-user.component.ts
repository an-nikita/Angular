import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicedataService } from '../../servicedata.service';
@Component({
  selector: 'app-edit-user',
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {


  submittedData: any[] = [];

  constructor(private router: Router, private userService : ServicedataService ) {}
  userData :any=[];
  ngOnInit(): void {


    this.showData()
  //   const data = localStorage.getItem('submittedData');
  //   if (data) {
  //     this.submittedData = JSON.parse(data);
  //   }
  // }

  // patchForm(index: number): void {
  //   this.router.navigate(['/third', index]); // Navigate with index as param
  }

  showData(){

 //get data

  this.userService.getdata().subscribe((data:any)=>{
    this.userData = data;
    console.log("Get Data",this.userData)
  });
  }

  editdata(id:number){

    this.router.navigate(['/third', id]); // Navigate with index as param
}






}


