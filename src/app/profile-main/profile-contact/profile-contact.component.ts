import { Component, OnInit } from '@angular/core';
import { TEXT_CONFIG,CONTACT_INFO,PERSONAL_INFO } from 'src/resources/texts/MohanProfile.text';

/*
 * ProfileContactComponent is contact page component which has contact informations.
 * 
 * @author Mohan Chidambaram.
 * 
 */
@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.css']
})
export class ProfileContactComponent implements OnInit {

  constructor() { }

  text: any = TEXT_CONFIG;
  contact: any = CONTACT_INFO;
  personal: any = PERSONAL_INFO;

  /*
   * ngOnInit is the init life cycle hook method.
   * 
   */
  ngOnInit(): void {
  }

}
