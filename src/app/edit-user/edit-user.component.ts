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


  Postdata={
  
    "company_name": "infosys",
    "country": "india",
    "street": "kothrod",
    "city": "New York",
    "state": "NY",
    "units": [
      {
        "unit_name": "Laptop",
        "unit_quantity": 10,
        "unit_price": 1200.00,
        "total_price": 12000.00
      }
    ]
  }
  submittedData: any[] = [];

  constructor(private router: Router, private userService : ServicedataService ) {}
  userData :any=[];
  receivedata:any=[];
  ngOnInit(): void {


    this.showData()
    this.add()
  //   const data = localStorage.getItem('submittedData');
  //   if (data) {
  //     this.submittedData = JSON.parse(data);
  //   }
  // }

  // patchForm(index: number): void {
  //   this.router.navigate(['/third', index]); // Navigate with index as param
  }

  //get data
  showData(){
  this.userService.getdata().subscribe((data:any)=>{
    this.userData = data;
    console.log("Get Data",this.userData)
  });
  }

  //post data
add(){
  this.userService.postdata(this.Postdata).subscribe((data:any) =>{
  this.receivedata = data;
  console.log("receivedata" , this.receivedata)
  });
}


//put data
  editData(id:number){
      // console.log(id)
    // this.router.navigate(['/third', id]); // Navigate with index as param
    this.router.navigateByUrl(`/third/${id}`)

}


//delete data
deleteData(id:number){
  console.log("Delete Data",id)

  this.userService.deletedata(id).subscribe((data:any)=>{
    console.log(data);
  })
 
}





}


