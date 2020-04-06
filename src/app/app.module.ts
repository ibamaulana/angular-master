import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTable } from './profile-table/profile-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableBasicExample } from './table-basic-example/table-basic-example.component';
import { TabelprofilComponent } from './tabelprofil/tabelprofil.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { JsondataComponent } from './jsondata/jsondata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ProfileComponent,
    ProfileTable,
    TableBasicExample,
    TabelprofilComponent,
    ProfileFormComponent,
    JsondataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
