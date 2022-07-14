import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { FormsModule } from "@angular/forms";

import { AngularFireStorage, AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
 import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";



@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule
  , HttpClientModule,
  FormsModule,
 
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule ,
  AngularFireStorageModule






],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
