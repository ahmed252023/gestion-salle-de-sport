import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {

  isResultLoaded = false;
  isUpdateFormActive = false;
  
  adminnom: string ="";
  adminprenom: string ="";
  
  adminID = "";
  constructor(private http: HttpClient )
  {
   
  }

  register()
  {
  
    let bodyData = {
      "nom" : this.adminnom,
      "prenom" : this.adminprenom,
      
    };
    this.http.post("http://localhost:9091/api/admin",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Admin added Successfully");
        
        
    });
  }
  save()
  {
    this.register();    
  }
}
