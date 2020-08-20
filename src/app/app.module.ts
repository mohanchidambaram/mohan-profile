import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from "./profile/profile.module";
import { AppComponent } from './app.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ProfileHomeComponent } from './profile-main/profile-home/profile-home.component';
import { ProfilePersonalComponent } from './profile-main/profile-personal/profile-personal.component';
import { ProfileEmploymentComponent } from './profile-main/profile-employment/profile-employment.component';
import { ProfileContactComponent } from './profile-main/profile-contact/profile-contact.component';
import { CdkStepperModule } from "@angular/cdk/stepper";


@NgModule({
  declarations: [
    AppComponent,
    ProfileMainComponent,
    ProfileHomeComponent,
    ProfilePersonalComponent,
    ProfileEmploymentComponent,
    ProfileContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProfileModule,
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
