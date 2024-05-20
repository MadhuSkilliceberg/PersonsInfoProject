import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LookUpValue } from '../../Models/LookUpValues';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LookUpValueservice {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'LookUpValue/';
  }

   // By using this method we will get the LookUpValues 
  GetLookUpValues(): any {
    return this.http.get(this.endpointUrl+"GetLookUpValues");
  }

  GetLookUpValueByCode(codes:string[]): any {
    return this.http.post(this.endpointUrl+"GetLookUpValueByCode",codes);
  }

  GetLookUpValueByLId(id:number): any {
    return this.http.get(this.endpointUrl+"GetLookUpValueByLId/"+id);
  }
   
  // By using this method we will get the LookUpValues based on the Id
  GetLookUpValuesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetLookUpValueById/" + id);
  }

  // By uing this method we will Add the LookUpValues based on LookUpValues
  AddLookUpValues(LookUpValues: LookUpValue): any {
    return this.http.post(this.endpointUrl+"AddLookUpValues", LookUpValues)
  }

   // By uing this method we will Update the LookUpValues based on LookUpValues
   UpdateLookUpValues(LookUpValues: LookUpValue): any {
    return this.http.put(this.endpointUrl+"UpdateLookUpValues", LookUpValues)
  }

// By using this method we will delete the LookUpValues based on the Id
DeleteLookUpValues(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteLookUpValues/" + id);
  }
}
