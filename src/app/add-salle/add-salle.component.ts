import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent {
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  sallenom: string ="";
  
  
  salleID = "";
 
  constructor(private http: HttpClient )
  {
   
  }

  register()
  {
  
    let bodyData = {
      "nomsalle" : this.sallenom,
      
      
    };
    this.http.post("http://localhost:9091/api/salle",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("salle added Successfully");
        
        
    });
  }
  save()
  {
    this.register();    
  }
}
