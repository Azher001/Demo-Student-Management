import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EntryComponent } from './entry/entry.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
const routes: Routes = [
  {
    path:'',
    component:EntryComponent,
    children:[
    {
        path:'',
        pathMatch:'full',
        redirectTo: 'list'
    },
    {
      path:'list',
      component: ListComponent
    },
    {
      path:'create',
      component: CreateComponent
    },
    {
      path:'edit/:id',
      component: CreateComponent
    },
    {
      path:'details/:id',
      component: DetailsComponent
    }]
  },
  
];

@NgModule({
  declarations: [
    ListComponent,
    EntryComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ],

})
export class StudentModule { }
