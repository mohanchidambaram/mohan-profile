import { Component, OnInit } from '@angular/core';
import { TEXT_CONFIG } from 'src/resources/texts/MohanProfile.text';
import { PersonalInfo, EMPLOYMENT_DATA_LIST } from 'src/app/models/academic-data';

/*
 * ProfileEmploymentComponent is employment page component which has current employment informations.
 * 
 * @author Mohan Chidambaram.
 * 
 */
@Component({
  selector: 'app-profile-employment',
  templateUrl: './profile-employment.component.html',
  styleUrls: ['./profile-employment.component.css']
})
export class ProfileEmploymentComponent implements OnInit {

  constructor() { }

  text: any = TEXT_CONFIG;
  employmentInfoList : PersonalInfo[] = EMPLOYMENT_DATA_LIST;

  /*
   * ngOnInit is the init life cycle hook method.
   * 
   */
  ngOnInit(): void {
    
  }

}
