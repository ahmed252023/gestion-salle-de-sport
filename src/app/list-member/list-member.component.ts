import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent {
  MemberArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  membernom: string ="";
  memberprenom: string ="";
  
  memberID = "";

  constructor(private http: HttpClient )
  {
    this.getAllMember();
  }
 
  getAllMember()
  {
    
    this.http.get("http://localhost:9091/api/allmember")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.MemberArray = resultData;
    });
  }


  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:9091/api/member"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Member Deleted")
        
  
    });
  }


}
