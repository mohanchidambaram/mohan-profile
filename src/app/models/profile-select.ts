/*
 * MatSelect interface is used to load the select component data.
 * 
 * @author Mohan Chidambaram.
 * 
 */
export interface MatSelect {
    code: string;
    name: string;
}

/*
 * DateCalculation class is to calculate years of experience till date.
 *  
 */
export class DateCalculation {
    annamStartDate: Date = new Date('11/21/2017');
    infoviewStartDate: Date = new Date('6/4/2018');
    angularStartDate: Date = new Date('12/1/2019');
    
    /*
     * calculateDifference method is used to calculate the diference between two dates.
     * 
     * @param {string} key
     * 
     * @returns {key:value} 
     */
    public calculateDifference(key:string) {
        let todayDate: Date = new Date();
        let date: Date;
        if (key === 'annam') {
            date = this.annamStartDate;
        } else if (key === 'angular'){
            date = this.angularStartDate;
        } else {
            date = this.infoviewStartDate;
        }
        let year = todayDate.getFullYear() - date.getFullYear();
        let month = (year * 12) + (todayDate.getMonth() - date.getMonth());
        let yearDifference = Math.floor(month/12);
        let monthDifference = month % 12;
        return {
            year:yearDifference,
            month:monthDifference
        };
    }
}