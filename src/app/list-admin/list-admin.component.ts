import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {

  AdminArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  adminnom: string ="";
  adminprenom: string ="";
  
  adminID = "";

  constructor(private http: HttpClient )
  {
    this.getAllAdmin();
  }
 
  getAllAdmin()
  {
    
    this.http.get("http://localhost:9091/api/alladmin")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.AdminArray = resultData;
    });
  }


  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:9091/api/admin"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Admin Deleted")
        
  
    });
  }



}
