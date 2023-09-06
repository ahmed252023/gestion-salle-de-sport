import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  isResultLoaded = false;
  isUpdateFormActive = false;
  
  employernom: string ="";
  employerprenom: string ="";
  
  adminID = "";
  constructor(private http: HttpClient )
  {
   
  }

  register()
  {
  
    let bodyData = {
      "nom" : this.employernom,
      "prenom" : this.employerprenom,
      
    };
    this.http.post("http://localhost:9091/api/employer",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employer added Successfully");
        
        
    });
  }
  save()
  {
    this.register();    
  }

}
