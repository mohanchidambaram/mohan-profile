import { TEXT_CONFIG, CONTENT_CONFIG, SKILL_INFO, PERSONAL_INFO, EMPLOYMENT_INFO } from 'src/resources/texts/MohanProfile.text';

export interface AcademicDetail {
    course: string;
    courseFull: string,
    institute: string;
    location: string;
    period: string;
    score: number;
    best: string;
}
  
export const ACADEMIC_DATA: AcademicDetail[] = [
    {
        course: TEXT_CONFIG.courseBE,
        courseFull: CONTENT_CONFIG.courseBEFull,
        institute: TEXT_CONFIG.collegeName,
        location: TEXT_CONFIG.locationErode,
        period: CONTENT_CONFIG.collegePeriod,
        score: 75,
        best: CONTENT_CONFIG.collegeBest,
    },
    {
        course: TEXT_CONFIG.courseHsc,
        courseFull: CONTENT_CONFIG.courseHscFull,
        institute: TEXT_CONFIG.schoolName,
        location: TEXT_CONFIG.locationGobi,
        period: CONTENT_CONFIG.hscPeriod,
        score: 95,
        best: CONTENT_CONFIG.schoolBest,
    },
    {
        course: TEXT_CONFIG.courseSslc,
        courseFull: CONTENT_CONFIG.courseSslcFull,
        institute: TEXT_CONFIG.schoolName,
        location: TEXT_CONFIG.locationGobi,
        period: CONTENT_CONFIG.sslcPeriod,
        score: 96,
        best: CONTENT_CONFIG.schoolBest,
    }
]

export interface SkillDetail {
    skill:string;
    rel_exp:{};
    isCert:string;
    level:any;
    category:string;
}

export const DATE_CONFIG = {
    annamStartDate: new Date('11/21/2017'),
    infoviewStartDate: new Date('6/4/2018'),
    angularStartDate: new Date('12/1/2019'),
    todayDate: new Date()
}

export const EXP_CONFIG = {
    annamExp : {
        year : Math.floor((((DATE_CONFIG.todayDate.getFullYear() - 
            DATE_CONFIG.annamStartDate.getFullYear()) * 12) + 
            (DATE_CONFIG.todayDate.getMonth() - DATE_CONFIG.annamStartDate.getMonth())) / 12),
        month : (((DATE_CONFIG.todayDate.getFullYear() - 
        DATE_CONFIG.annamStartDate.getFullYear()) * 12) + 
        (DATE_CONFIG.todayDate.getMonth() - DATE_CONFIG.annamStartDate.getMonth())) % 12
    },
    ivtlExp : {
        year : Math.floor((((DATE_CONFIG.todayDate.getFullYear() - 
            DATE_CONFIG.infoviewStartDate.getFullYear()) * 12) + 
            (DATE_CONFIG.todayDate.getMonth() - DATE_CONFIG.infoviewStartDate.getMonth())) / 12),
        month : (((DATE_CONFIG.todayDate.getFullYear() - 
        DATE_CONFIG.infoviewStartDate.getFullYear()) * 12) + 
        (DATE_CONFIG.todayDate.getMonth() - DATE_CONFIG.infoviewStartDate.getMonth())) % 12
    },
    angularExp : {
        year : Math.floor((((DATE_CONFIG.todayDate.getFullYear() - 
            DATE_CONFIG.angularStartDate.getFullYear()) * 12) + 
            (DATE_CONFIG.todayDate.getMonth() - DATE_CONFIG.angularStartDate.getMonth())) / 12),
        month : (((DATE_CONFIG.todayDate.getFullYear() - 
        DATE_CONFIG.angularStartDate.getFullYear()) * 12) + 
        (DATE_CONFIG.todayDate.getMonth() - DATE_CONFIG.angularStartDate.getMonth())) % 12
    }
}

export const SKILL_SET: SkillDetail[] = [
    {
        skill:SKILL_INFO.java,
        rel_exp:EXP_CONFIG.annamExp,
        isCert:'Yes',
        level:[1,2,3,4,5],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.spring,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.springMvc,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3,4,5],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.springBoot,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3,4,5],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.python,
        rel_exp:{year:0, month:0},
        isCert:'Yes',
        level:[1,2,3],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.rdb,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.sql,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.cassandra,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.angular,
        rel_exp: EXP_CONFIG.angularExp,
        isCert:'No',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryFront
    },
    {
        skill:SKILL_INFO.js,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3],
        category:SKILL_INFO.categoryFront
    },
    {
        skill:SKILL_INFO.html,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3],
        category:SKILL_INFO.categoryFront
    },
    {
        skill:SKILL_INFO.css,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryFront
    },
    {
        skill:SKILL_INFO.less,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'No',
        level:[1,2,3],
        category:SKILL_INFO.categoryFront
    },
    {
        skill:SKILL_INFO.tomcat,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3],
        category:SKILL_INFO.categoryServer
    },
    {
        skill:SKILL_INFO.git,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryTool
    },
    {
        skill:SKILL_INFO.jenkins,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3],
        category:SKILL_INFO.categoryTool
    },
    {
        skill:SKILL_INFO.sonar,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3],
        category:SKILL_INFO.categoryTool
    },
    {
        skill:SKILL_INFO.agile,
        rel_exp: EXP_CONFIG.annamExp,
        isCert:'Not Applicable',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryFlow
    },
    {
        skill:SKILL_INFO.sdlc,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryFlow
    },
    {
        skill:SKILL_INFO.analysis,
        rel_exp: EXP_CONFIG.annamExp,
        isCert:'Not Applicable',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryFlow
    },
    {
        skill:SKILL_INFO.web,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3],
        category:SKILL_INFO.categoryFlow
    },
    {
        skill:SKILL_INFO.cr,
        rel_exp: EXP_CONFIG.annamExp,
        isCert:'Not Applicable',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryFlow
    },
    {
        skill:SKILL_INFO.unitTest,
        rel_exp: EXP_CONFIG.ivtlExp,
        isCert:'Not Applicable',
        level:[1,2,3],
        category:SKILL_INFO.categoryFlow
    },
    {
        skill:SKILL_INFO.c,
        rel_exp:{year:0, month:0},
        isCert:'Yes',
        level:[1,2,3,4],
        category:SKILL_INFO.categoryBack
    },
    {
        skill:SKILL_INFO.teamMgmt,
        rel_exp:{year: 0, month:3},
        isCert:'Not Applicable',
        level:[1,2],
        category:SKILL_INFO.categoryGeneral
    },
    {
        skill:SKILL_INFO.problemSolving,
        rel_exp: EXP_CONFIG.annamExp,
        isCert:'Not Applicable',
        level:[1,2,3.4],
        category:SKILL_INFO.categoryGeneral
    }
]


export interface PersonalInfo {
    key: string;
    value: string;
}

export const PERSONAL_DATA_LIST : PersonalInfo[] = [
    {
        key : PERSONAL_INFO.nameLabel,
        value: TEXT_CONFIG.name
    },
    {
        key : PERSONAL_INFO.genderLabel,
        value: PERSONAL_INFO.gender
    },
    {
        key : PERSONAL_INFO.fatherLabel,
        value: PERSONAL_INFO.fatherName
    },
    {
        key : PERSONAL_INFO.motherLabel,
        value: PERSONAL_INFO.motherName
    },
    {
        key : PERSONAL_INFO.dobLabel,
        value: PERSONAL_INFO.dob
    },
    {
        key : PERSONAL_INFO.addressLabel,
        value: PERSONAL_INFO.address
    },
    {
        key : PERSONAL_INFO.villageLabel,
        value: PERSONAL_INFO.village
    },
    {
        key : PERSONAL_INFO.cityLabel,
        value: PERSONAL_INFO.city
    },
    {
        key : PERSONAL_INFO.districtLabel,
        value: PERSONAL_INFO.district
    },
    {
        key : PERSONAL_INFO.stateLabel,
        value: PERSONAL_INFO.state
    },
    {
        key : PERSONAL_INFO.postalLabel,
        value: PERSONAL_INFO.pin
    },
    {
        key : PERSONAL_INFO.nationalityLabel,
        value: PERSONAL_INFO.nation
    },
    {
        key : PERSONAL_INFO.languageLabel,
        value: PERSONAL_INFO.language
    },
    {
        key : PERSONAL_INFO.hobbyLabel,
        value: PERSONAL_INFO.hobby
    }
];

export const EMPLOYMENT_DATA_LIST : PersonalInfo[] = [
    {
        key : EMPLOYMENT_INFO.organizationLabel,
        value: TEXT_CONFIG.currentOrganization
    },
    {
        key : EMPLOYMENT_INFO.designationLabel,
        value: EMPLOYMENT_INFO.designation
    },
    {
        key : EMPLOYMENT_INFO.clientLabel,
        value: EMPLOYMENT_INFO.client
    },
    {
        key : EMPLOYMENT_INFO.currentLocationLabel,
        value: TEXT_CONFIG.locationChennai
    },
    {
        key : EMPLOYMENT_INFO.preferedLocationLabel,
        value: EMPLOYMENT_INFO.preferedLocation
    },
    {
        key : EMPLOYMENT_INFO.cctcLabel,
        value: EMPLOYMENT_INFO.cctc
    },
    {
        key : EMPLOYMENT_INFO.ectcLabel,
        value: EMPLOYMENT_INFO.ectc
    },
    {
        key : EMPLOYMENT_INFO.npLabel,
        value: EMPLOYMENT_INFO.np
    },
    {
        key : EMPLOYMENT_INFO.openLabel,
        value: EMPLOYMENT_INFO.isOpen
    }
];