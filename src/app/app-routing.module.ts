import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileTable } from './profile-table/profile-table.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { JsondataComponent } from './jsondata/jsondata.component';


const routes: Routes =  [
  {
    path: 'profile',
    component: ProfileTable,
    data: { title: 'Heroes List' }
  },
  {
    path: 'add-profile',
    component: ProfileFormComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'jsondata',
    component: JsondataComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
