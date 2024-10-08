import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CompanyEmails } from '../../Models/CompanyEmails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyEmailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CompanyEmail/';
  }

  // By using this method we will get the CompanyEmails 
  GetCompanyEmails(): any {
    return this.http.get(this.endpointUrl + "GetCompanyEmails");
  }

  // By using this method we will get the CompanyEmails based on the Id
  GetByCompanyEmailId(id: number): any {
    return this.http.get(this.endpointUrl + "GetByCompanyEmailId/" + id);
  }

  // By using this method we will get the CompanyEmails based on the Id
  GetByCompanyEmailComapnyId(id: number): any {
    return this.http.get(this.endpointUrl + "GetByCompanyEmailComapnyId/" + id);
  }


  // By uing this method we will Add the CompanyEmails based on CompanyEmails
  AddCompanyEmails(companyemails: CompanyEmails): any {
    return this.http.post(this.endpointUrl + "AddCompanyEmails", companyemails)
  }

  // By uing this method we will Update the CompanyEmails based on CompanyEmails
  UpdateCompanyEmails(companyemails: CompanyEmails): any {
    return this.http.put(this.endpointUrl + "UpdateCompanyEmails", companyemails)
  }

  // By using this method we will delete the CompanyEmails based on the Id
  DeleteCompanyEmails(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteCompanyEmails/" + id);
  }

   // By using this method we will get the CompanyEmails based on the CompanyAddressId
   GetCompanyEmailByCompanyAddressId(companyaddressId: number): any {
    return this.http.get(this.endpointUrl + "GetCompanyEmailByCompanyAddressId/" + companyaddressId);
  }
}
