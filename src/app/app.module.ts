import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListMemberComponent } from './list-member/list-member.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListSalleComponent } from './list-salle/list-salle.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { HomeComponent } from './home/home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    ListMemberComponent,
    AddAdminComponent,
    ListAdminComponent,
    ListEmpComponent,
    AddEmpComponent,
    ListSalleComponent,
    AddSalleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
