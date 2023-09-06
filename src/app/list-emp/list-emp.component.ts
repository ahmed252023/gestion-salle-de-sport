import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent {
  EmployerArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  employernom: string ="";
  employerprenom: string ="";
  
  employerID = "";

  constructor(private http: HttpClient )
  {
    this.getAllEmployer();
  }
 
  getAllEmployer()
  {
    
    this.http.get("http://localhost:9091/api/allemployer")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.EmployerArray = resultData;
    });
  }


  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:9091/api/employer"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("employer Deleted")
        
  
    });
  }



}
