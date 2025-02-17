import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicedataService } from '../../servicedata.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-client',
  
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'

})
export class ClientComponent implements OnInit {
  ServicedataService(ServicedataService: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private userService :ServicedataService){

  }
  


Postdata={
  
    "company_name": "wipro",
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
  
updateData={


  "company_name": "trix",
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

userData:any=[];
receivedata?:any;
sample =inject(ServicedataService);

  ngOnInit(){
    // this.getUsers();
    // this.sendData();
   // this.updateData();
  }

  
  //get data
getUsers(){
  this.userService.getdata().subscribe((data:any)=>{
    this.userData = data;
    console.log("Get Data",this.userData)
  });

}

//post Data
sendData(){
  this.userService.postdata(this.Postdata).subscribe((data:any) =>{
  this.receivedata = data;
  console.log("receivedata" , this.receivedata)
  });
}


  // Update Data (PUT)
  updateCompany() {
    const company_id = "135"; 
    this.userService.putdata(company_id, this.updateData).subscribe(
      (response: any) => {
        console.log("Updated Data:", response);
      },
      (error) => {
        console.error("Update Error:", error);
      }
    );
  }


  delete() {
    const company_id = "66"; // Change this ID as needed
     this.userService.Delete(company_id).subscribe(
      (response: any) => {
        console.log(`Deleted Company ID ${company_id}`, response);
       // this.userData = []; // Clear the displayed data
      
      },
      (error: any) => {
        console.error("Delete Error:", error);
      }
    );
  }
  
 }
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

