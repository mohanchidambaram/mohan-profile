import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { PersonalInfo } from 'src/app/models/academic-data';
import { TEXT_CONFIG } from 'src/resources/texts/MohanProfile.text';

/*
 * ProfilePersonalComponent is personal page component which has personal informations.
 * 
 * @author Mohan Chidambaram.
 * 
 */
@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.component.html',
  styleUrls: ['./profile-personal.component.css']
})
export class ProfilePersonalComponent implements OnInit {

  constructor(protected profileService:ProfileService) { }

  text: any = TEXT_CONFIG;
  personalInfoList : PersonalInfo[] = [];

  /*
   * ngOnInit is the init life cycle hook method.
   * 
   */
  ngOnInit(): void {
    this.personalInfoList = this.profileService.getPersonalInfoList();
  }

}
