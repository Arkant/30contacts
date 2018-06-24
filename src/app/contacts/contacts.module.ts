import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { ContactsService } from './contacts.service';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';

const routes: Route[] = [
  { path: '', component: ContactsComponent, children: [
    { path: '', component: ListComponent}
    ]
  },
    {
      path: 'details', component: DetailsComponent, children: [
            { path: 'form', component: FormComponent}
        ]
    },
    {
      path: 'add', component: AddComponent, children: [
            { path: 'form', component: FormComponent}
        ]
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  providers: [ContactsService],
  exports: [RouterModule],
  declarations: [ContactsComponent, ListComponent, DetailsComponent, AddComponent, FormComponent]
})
export class ContactsModule { }
