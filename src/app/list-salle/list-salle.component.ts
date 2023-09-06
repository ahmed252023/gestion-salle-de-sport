import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-salle',
  templateUrl: './list-salle.component.html',
  styleUrls: ['./list-salle.component.css']
})
export class ListSalleComponent {
  SalleArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  sallenom: string ="";
  
  
  salleID = "";

  constructor(private http: HttpClient )
  {
    this.getAllSalle();
  }
 
  getAllSalle()
  {
    
    this.http.get("http://localhost:9091/api/allsalle")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.SalleArray = resultData;
    });
  }


  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:9091/api/salle"+ "/"+ data.idsalle,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Salle De Sport Deleted")
        
  
    });
  }
}
