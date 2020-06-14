import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContactListComponent,
  },
  { path: 'add', component: AddEditContactComponent },
  { path: 'edit/:id', component: AddEditContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    AddEditContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
