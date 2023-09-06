import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMemberComponent } from './list-member/list-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { ListSalleComponent } from './list-salle/list-salle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allmember', component: ListMemberComponent },
  { path: 'member', component: AddMemberComponent },
  { path: 'member/{id}', component: ListMemberComponent },

  { path: 'admin', component: AddAdminComponent },
  { path: 'alladmin', component: ListAdminComponent },
  { path: 'admin/{id}', component: ListAdminComponent },

  { path: 'employer', component: AddEmpComponent },
  { path: 'allemployer', component: ListEmpComponent },
  { path: 'employer/{id}', component: ListEmpComponent },

  { path: 'salle', component: AddSalleComponent },
  { path: 'allsalle', component: ListSalleComponent },
  { path: 'salle/{id}', component: ListSalleComponent },




 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
