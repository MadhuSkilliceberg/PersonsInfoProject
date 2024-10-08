import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CompanyReviews } from '../../Models/CompanyReviews';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyReviewsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CompanyReview/';
  }

  // By using this method we will get the CompanyReviews 
  GetCompanyReviews(): any {
    return this.http.get(this.endpointUrl + "GetCompanyReviews");
  }

  // By using this method we will get the CompanyReviews based on the Id
  GetCompanyReviewsById(id: number): any {
    return this.http.get(this.endpointUrl + "GetCompanyReviewsById/" + id);
  }

  // By using this method we will get the CompanyReviews based on the ComapanyId
  GetByCompanyReviewComapanyId(id: number): any {
    return this.http.get(this.endpointUrl + "GetByCompanyReviewComapanyId/" + id);
  }

  // By using this method we will get the CompanyReviews based on the ComapanyId
  GetCompanyReviewTreeHierarchical(id: number): any {
    return this.http.get(this.endpointUrl + "GetCompanyReviewTreeHierarchical/" + id);
  }

  // By using this method we will get the CompanyReviews based on the ComapanyId
  GetCommentsTreeHierarchical(id: number[]): any {
    
    return this.http.post(this.endpointUrl + "GetCommentsTreeHierarchical/" ,id);
  }


 
  
  // By using this method we will get the CompanyReviews based on the ComapanyId
  GetByCompanyReviewComments(id: number): any {
    return this.http.get(this.endpointUrl + "GetByCompanyReviewComments/" + id);
  }
  

  // By uing this method we will Add the CompanyReviews based on CompanyReviews
  AddCompanyReviews(companyreviews: CompanyReviews): any {
    return this.http.post(this.endpointUrl + "AddCompanyReviews", companyreviews)
  }

  // By uing this method we will Update the CompanyReviews based on CompanyReviews
  UpdateCompanyReviews(companyreviews: CompanyReviews): any {
    return this.http.put(this.endpointUrl + "UpdateCompanyReviews", companyreviews)
  }

  // By using this method we will delete the CompanyReviews based on the Id
  DeleteCompanyReviews(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteCompanyReviews/" + id);
  }

  
 

}
