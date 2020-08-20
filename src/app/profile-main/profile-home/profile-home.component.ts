import { Component, OnInit, ViewChild } from '@angular/core';
import { TEXT_CONFIG, CONTENT_CONFIG } from 'src/resources/texts/MohanProfile.text';
import {MatAccordion} from '@angular/material/expansion';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ACADEMIC_DATA, AcademicDetail, SKILL_SET, SkillDetail, EXP_CONFIG } from "../../models/academic-data";
import { MatSelect } from "../../models/profile-select";
import { ProfileService } from "../../service/profile.service";

/*
 * ProfileHomeComponent is home page component which has major information.
 * 
 * @author Mohan Chidambaram.
 * 
 */
@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfileHomeComponent implements OnInit {

  constructor(protected profileService:ProfileService) { }

  @ViewChild(MatAccordion) accordion: MatAccordion;
  text: any = TEXT_CONFIG;
  content: any = CONTENT_CONFIG;
  experience: any = EXP_CONFIG;
  rolePerfMgmtList:Array<string> = [];
  roleMfgList: Array<string> = [];
  roleAnnamList: Array<string> = [];
  skillSetList: SkillDetail[] = SKILL_SET;
  certList: Array<string> = [];
  courseList: Array<string> = [];
  academicDataSource : AcademicDetail[] = ACADEMIC_DATA;
  academicColumns = ['course', 'institute', 'period'];
  columnLabelMap = {
    'course' : this.text.courseLabel,
    'institute' : this.text.instituteLabel,
    'period' : this.text.periodLabel
  };
  expandedElement: AcademicDetail | null;
  interestSelectList: MatSelect[] = [
    {code:'achieve', name:this.text.achieveHeader},
    {code:'activity', name:this.text.activityHeader},
  ];
  achievementList: Array<string> = [];
  activityList: Array<string> = [];
  selectedInterest: string = 'achieve';

  /*
   * ngOnInit is the init life cycle hook method.
   * 
   */
  ngOnInit(): void {
    this.rolePerfMgmtList  = this.profileService.getPerfMgmtRoleList();
    this.roleMfgList = this.profileService.getMfgRoleList();
    this.roleAnnamList = this.profileService.getAnnamRoleList();
    this.certList = this.profileService.getCertificateList();
    this.courseList = this.profileService.getCourseList();
    this.achievementList =  this.profileService.getAchievementList();
    this.activityList = this.profileService.getActivityList();  
  }
}
