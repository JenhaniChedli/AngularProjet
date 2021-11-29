import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from "@angular/forms";
import {RouterModule,Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import { MeteoComponent } from './meteo/meteo.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes:Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'meteo', component:MeteoComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: '',
   redirectTo:'/about',
    pathMatch:'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    MeteoComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
