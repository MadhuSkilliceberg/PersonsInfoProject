import { Component, OnInit } from '@angular/core';
import { UserEmails } from 'src/app/Models/UserEmails';
import { UserEmailsService } from './../../services/useremails/useremails.service'


@Component({
  selector: 'app-UserEmails',
  templateUrl: './UserEmails.component.html',
  styleUrls: ['./UserEmails.component.css']
})
export class UserEmailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  useremails: UserEmails = new UserEmails();
  useremailsData: UserEmails[] = []
  useremailsId: number = 0;

  constructor(
    private useremailsService: UserEmailsService,

  ) { }

  ngOnInit(): any {
    this.GetUserEmails();
  }

  // By using this method we will get the UserEmails 
  GetUserEmails(): any {
    this.useremailsService.GetUserEmails().subscribe((res: any) => {
      this.useremailsData = res;

    })
  }

  // By using this method we will get the UserEmails based on the Id
  GetUserEmailsById(Id: number): any {
    this.useremailsService.GetUserEmailsById(Id).subscribe((res: any) => {
      this.useremails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserEmails based on UserEmails
  AddUserEmails(): any {
    this.useremailsService.AddUserEmails(this.useremails).subscribe((res: any) => {
      this.GetUserEmails();
      this.useremails = new UserEmails();
    })
  }

   // By uing this method we will Update the UserEmails based on UserEmails
  UpdateUserEmails(): any {
    this.useremailsService.UpdateUserEmails(this.useremails).subscribe((res: any) => {
      this.GetUserEmails();
      this.useremails = new UserEmails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserEmails based on the Id
  DeleteUserEmails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.useremailsService.DeleteUserEmails(Id).subscribe((res: any) => {
        this.GetUserEmails();
        this.useremails = new UserEmails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserEmails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserEmails();
  }
}

