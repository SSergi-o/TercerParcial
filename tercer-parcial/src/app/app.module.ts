import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AbmComponent } from './components/abm/abm.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'iniciar-sesion',component: IniciarSesionComponent},
  {path: 'add-record',component: AddRecordComponent},
  {path: 'abm',component: AbmComponent},
  {path: 'panel-admin',component: PanelAdminComponent},
  {path: 'edit-record/:id',component: AddRecordComponent},





];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    IniciarSesionComponent,
    AddRecordComponent,
    AbmComponent,
    PanelAdminComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideFirestore(() => getFirestore()),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
