import { Injectable } from '@angular/core';
import { TEXT_CONFIG, CONTENT_CONFIG, PERSONAL_INFO } from 'src/resources/texts/MohanProfile.text';
import { PERSONAL_DATA_LIST, SKILL_SET, ACADEMIC_DATA } from '../models/academic-data';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  text: any = TEXT_CONFIG;
  content: any = CONTENT_CONFIG;
  rolePerfMgmtList:Array<string> = [];
  roleMfgList: Array<string> = [];
  roleAnnamList: Array<string> = [];
  achievementList: Array<string> = [];
  activityList: Array<string> = [];
  certList: Array<string> = [];
  courseList: Array<string> = [];

  /*
   * getPersonalInfoList is used to get the items to be displayed in personal information.
   * 
   * @returns { PersonalInfo[] } PERSONAL_DATA_LIST.
   */
  getPersonalInfoList() {
      return PERSONAL_DATA_LIST;
  }

  /*
   * getSkillDataList is used to get the skills to be displayed in skills tab.
   * 
   * @returns { SkillDetail[] } SKILL_SET.
   */
  getSkillDataList() {
    return SKILL_SET;
  }

  /*
   * getAcademicDataList is used to get the academic details to be displayed in academic tab.
   * 
   * @returns { AcademicDetail[] } ACADEMIC_DATA.
   */
  getAcademicDataList() {
    return ACADEMIC_DATA;
  }

  /*
   * getPerfMgmtRoleList is used to get the roles of performance management project.
   * 
   * @returns { Array<string> } rolePerfMgmtList.
   */
  getPerfMgmtRoleList() {
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt1);
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt2);
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt3);
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt4);
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt5);
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt6);
    this.rolePerfMgmtList.push(this.content.rolePerfMgmt7);
    return this.rolePerfMgmtList;
  }

  /*
   * getMfgRoleList is used to get the roles of manufacturing project.
   * 
   * @returns { Array<string> } roleMfgList.
   */
  getMfgRoleList() {
    this.roleMfgList.push(this.content.roleMfg1);
    this.roleMfgList.push(this.content.roleMfg2);
    this.roleMfgList.push(this.content.roleMfg3);
    this.roleMfgList.push(this.content.roleMfg4);
    this.roleMfgList.push(this.content.roleMfg5);
    return this.roleMfgList;
  }

  /*
   * getAnnamRoleList is used to get the roles at Annam soft company.
   * 
   * @returns { Array<string> } roleAnnamList.
   */
  getAnnamRoleList() {
    this.roleAnnamList.push(this.content.roleAnnam1);
    this.roleAnnamList.push(this.content.roleAnnam2);
    this.roleAnnamList.push(this.content.roleAnnam3);
    return this.roleAnnamList;
  }

  /*
   * getAchievementList is used to get list of achievements to show in Interests tab.
   * 
   * @returns { Array<string> } achievementList.
   */
  getAchievementList() {
    this.achievementList.push(this.content.achieve1);
    this.achievementList.push(this.content.achieve2);
    this.achievementList.push(this.content.achieve3);
    this.achievementList.push(this.content.achieve4);
    this.achievementList.push(this.content.achieve5);
    this.achievementList.push(this.content.achieve6);
    this.achievementList.push(this.content.achieve7);
    return this.achievementList;
  }

  /*
   * getActivityList is used to get list of additional activities to show in Interests tab.
   * 
   * @returns { Array<string> } activityList.
   */
  getActivityList() {
    this.activityList.push(this.content.activity1);
    this.activityList.push(this.content.activity2);
    this.activityList.push(this.content.activity3);
    return this.activityList;
  }

  /*
   * getCertificateList is used to get list of Certifications done to show in Courses tab.
   * 
   * @returns { Array<string> } certList.
   */
  getCertificateList() {
    this.certList.push(this.content.certJava);
    this.certList.push(this.content.certC);
    return this.certList;
  }

  /*
   * getCourseList is used to get list of Courses completed to show in Courses tab.
   * 
   * @returns { Array<string> } courseList.
   */
  getCourseList() {
    this.courseList.push(this.content.courseJava);
    this.courseList.push(this.content.courseC);
    this.courseList.push(this.content.coursePython);
    this.courseList.push(this.content.courseML);
    return this.courseList;
  }
}
