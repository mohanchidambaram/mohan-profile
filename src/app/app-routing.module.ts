import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileHomeComponent } from './profile-main/profile-home/profile-home.component';
import { ProfilePersonalComponent } from './profile-main/profile-personal/profile-personal.component';
import { ProfileEmploymentComponent } from './profile-main/profile-employment/profile-employment.component';
import { ProfileContactComponent } from './profile-main/profile-contact/profile-contact.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/profile"},
  {path: "profile", component: ProfileMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
