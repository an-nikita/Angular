import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicedataService {

 
  constructor(private http: HttpClient) { }

// private apiUrl="https://api.restful-api.dev/objects";
private apiUrl="http://localhost/PHP-api/index.php";

getdata(){
  return this.http.get(this.apiUrl);
}

postdata(data:any){
  return this.http.post(this.apiUrl,data);
}

//  putdata(id: string, updatedData: any) {
//   return this.http.put(`${this.apiUrl}/${id}`, updatedData);
// }

putdata(id: string, updatedData: any) {
  return this.http.put(`${this.apiUrl}?id=${id}`, updatedData, {
    headers: { 'Content-Type': 'application/json' }
  });
}

// deletedata(id: string) {
//   return this.http.delete(`${this.apiUrl}/${id}`);
// }

deletedata(id: string) {
  return this.http.delete(`${this.apiUrl}?id=${id}`, {
    headers: { 'Content-Type': 'application/json' }
  });
}


}

