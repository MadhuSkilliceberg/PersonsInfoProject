import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CYears } from '../../Models/CYears';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CYearsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CYear/';
  }

   // By using this method we will get the CYears 
  GetCYears(): any {
    return this.http.get(this.endpointUrl+"GetCYear");
  }
  
  // By using this method we will get the CYears based on the Id
  GetCYearsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCYearById/" + id);
  }

  // By uing this method we will Add the CYears based on CYears
  AddCYears(cyears: CYears): any {
    return this.http.post(this.endpointUrl+"AddCYear", cyears)
  }

   // By uing this method we will Update the CYears based on CYears
   UpdateCYears(cyears: CYears): any {
    return this.http.put(this.endpointUrl+"UpdateCYear", cyears)
  }

// By using this method we will delete the CYears based on the Id
DeleteCYears(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteCYear/" + id);
  }
}
