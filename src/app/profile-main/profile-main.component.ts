import { Component, OnInit } from '@angular/core';
import { TEXT_CONFIG, CONTENT_CONFIG } from 'src/resources/texts/MohanProfile.text';

/*
 * ProfileMainComponent is main component of the page which includes all the other components.
 * 
 * @author Mohan Chidambaram.
 * 
 */
@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {

  constructor() { }

  text: any = TEXT_CONFIG;
  content: any = CONTENT_CONFIG;
  menuValues: string[] = [];

  /*
   * ngOnInit is the init life cycle hook method.
   * 
   */
  ngOnInit(): void {
    this.menuValues.push(this.text.sideMenuHome);
    this.menuValues.push(this.text.sideMenuPersonal);
    this.menuValues.push(this.text.sideMenuEmployment);
    this.menuValues.push(this.text.sideMenuContact);
  }

}
