import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Menu_List } from '../../Models/Menu_List';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Menu_ListService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'MenuList/';
  }

   // By using this method we will get the Menu_List 
  GetMenu_List(): any {
    return this.http.get(this.endpointUrl+"GetMenuLists");
  }
  
  // By using this method we will get the Menu_List based on the Id
  GetMenu_ListById(id: number): any {
    return this.http.get(this.endpointUrl+"GetMenuListById/" + id);
  }

  // By uing this method we will Add the Menu_List based on Menu_List
  AddMenu_List(menu_list: Menu_List): any {
    return this.http.post(this.endpointUrl+"AddMenuList", menu_list)
  }

   // By uing this method we will Update the Menu_List based on Menu_List
   UpdateMenu_List(menu_list: Menu_List): any {
    return this.http.put(this.endpointUrl+"UpdateMenuList", menu_list)
  }

// By using this method we will delete the Menu_List based on the Id
DeleteMenu_List(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteMenuList/" + id);
  }
}
