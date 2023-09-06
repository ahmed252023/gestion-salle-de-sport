import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  membernom: string ="";
  memberprenom: string ="";
  
  memberID = "";
 
  constructor(private http: HttpClient )
  {
   
  }

  register()
  {
  
    let bodyData = {
      "nom" : this.membernom,
      "prenom" : this.memberprenom,
      
    };
    this.http.post("http://localhost:9091/api/member",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("member added Successfully");
        
        
    });
  }
  save()
  {
    this.register();    
  }
}
